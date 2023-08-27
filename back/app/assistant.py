from db import *
from text_parsing import parse_iterator, _parse_set, _parse_amount, _parse_beverage, _parse_side
from gpt import GPT

class Assistant:
    def __init__(self):
        self.gpt = GPT()
        self.reset_menu()

    def reset_menu(self):
        self.menu = {}
        self.final_order = {
            'ok': False,  # 주문 가능 여부
            'context': {'question': None, 'answer': None},  # 대화 컨텍스트
            'menu': {},  # 메뉴 정보
            'isTakeout': None,  # 포장 / 매장
        }
        self.current_menu = None

    def create_new_menu(self, burger):
        self.menu[burger] = {
            'type': None,  # 단품 / 세트
            'quantity': None,  # 수량
            'beverage': None,  # 음료
            'side': None,  # 사이드
            'option': None,  # 추가 옵션
        }

        return self.menu[burger]

    def check_burger_in_menus(self, burger):
        if burger in self.menu:
            return self.menu[burger]
        return False

    def get_burgers(self, sentence):
        burgers = {}
        for key, values in menus.items():
            for value in values:
                if value in sentence:
                    index = sentence.find(value)

                    if key in burgers:
                        if burgers[key] > index:
                            burgers[key] = index
                    else:
                        burgers[key] = index

        burgers = [(burger, index) for burger, index in burgers.items()]
        burgers.sort(key=lambda x: x[1], reverse=False)

        sentences = []
        for n, (burger, index) in enumerate(burgers):
            next_index = burgers[n + 1][1] if n + 1 < len(burgers) else len(sentence)
            sentences.append(sentence[index: next_index])

        burgers = [burger for burger, _ in burgers]
        return sentences, burgers

    def get_menus_from_burgers(self, burgers):
        menus = []
        for burger in burgers:
            menu = self.check_burger_in_menus(burger)

            if menu:
                menus.append(menu)
            else:
                new_menu = self.create_new_menu(burger)
                menus.append(new_menu)

        return menus

    def get_options(self, sentence):
        for key, values in options.items():
            for value in values:
                if value in sentence:
                    index = sentence.find(value)
                    option = sentence[index:]
                    option = option.replace(value, '').replace('으로', '').replace('으로는', '').replace('은', '')
                    return option
    def take_order(self, text):
        if '완료' in text:
            return self.ask_takeout(text)

        if '포장' in text or '매장' in text:
            return self.complete_order(text)

        sentences, burgers = self.get_burgers(text)
        menus = self.get_menus_from_burgers(burgers)

        if not sentences:
            sentences = [text]
            menus = [self.current_menu]

        if menus == [None]:
            return self.ask_more_menu(text)

        for n, menu in enumerate(menus):
            burger_text = sentences[n]
            self.current_menu = menu

            parse_iterator(_parse_set, menu, burger_text, **sets)
            parse_iterator(_parse_amount, menu, burger_text, **amounts)
            parse_iterator(_parse_beverage, menu, burger_text, **beverages)
            parse_iterator(_parse_side, menu, burger_text, **sides)
            options = self.get_options(text)
            if options:
                menu['option'] = options

            if menu['type'] == '세트':
                if menu['beverage'] is None:
                    menu['beverage'] = '콜라'
                if menu['side'] is None:
                    menu['side'] = '감자튀김'


        final_order = self.return_final_order()
        final_order['context'] = {
            'question': text,
            'answer': self.gpt.answer(text)
        }

        return final_order

    def return_final_order(self):
        final_menu = []
        for n, key in enumerate(self.menu):
            menu = {'id': n, 'burger': key}
            menu.update(self.menu[key])
            final_menu.append(menu)

        self.final_order['menu'] = final_menu
        return self.final_order

    def ask_more_menu(self, text):
        context = {
            'question': text,
            'answer': '햄버거 메뉴를 먼저 주문해 주세요.'
        }

        final_order = self.return_final_order()
        final_order['context'] = context
        return final_order

    def ask_takeout(self, text):
        context = {
            'question': text,
            'answer': '네, 주문이 완료되었습니다. 메뉴는 포장 하실건가요? 매장에서 드실건가요?'
        }

        final_order = self.return_final_order()
        final_order['context'] = context
        return final_order

    def complete_order(self, text):
        if '포장' in text:
            context = {
                'question': text,
                'answer': '네 잠시만 기다리시면 메뉴를 포장해서 드리겠습니다. 저희 매장을 이용해주셔서 감사합니다.'
            }
        else:
            context = {
                'question': text,
                'answer': '네 잠시만 기다리시면 음식을 가져다 드리겠습니다. 저희 매장을 이용해주셔서 감사합니다.'
            }

        final_order = self.return_final_order()
        final_order['ok'] = True
        final_order['context'] = context
        final_order['isTakeout'] = '포장' in text

        self.reset_menu()
        self.gpt.initialize_messages()
        return final_order

if __name__ == '__main__':
    assistant = Assistant()
    print(assistant.take_order('음료 따뜻한 커피 하나 주세요'))
    print(assistant.take_order('빅맥 세트 하나 주시고 음료는 시원한 커피로 주세요'))
    print(assistant.take_order('아 음료는 사이다로 바꿔 주시고 사이드는 치즈스틱으로 주세요'))
    print(assistant.take_order('하나 더 주문할게요. 상하이 단품으로 두개 주세요'))
    print(assistant.take_order('아 그리고 빅맥 시킨거 음료는 그냥 제로 콜라로 주시고 상하이는 세트로 3개로 주시고 사이드는 감자튀김, 음료는 사이다로 주세요'))
    print(assistant.take_order('주문 완료 할게요'))
    print(assistant.take_order('매장에서 먹을거에요'))