import os
import openai

from text_parsing import parse_iterator, _parse_menu
from db import menus

from dotenv import load_dotenv
load_dotenv()

openai.api_key = os.getenv("OPENAI_API_KEY")

class GPT:
    def __init__(self):
        self.model = 'gpt-3.5-turbo'
        self.initialize_messages()

    def initialize_messages(self):
        self.messages = [
            {
                'role': 'system',
                'content': '너는 이제부터 실제 한국의 햄버거 프렌차이즈 직원이야. 기계가 아닌 진짜 사람처럼 고객의 요구에 답변해줘. 그리고 최대한 1~2문장 이내로 짧게 답변해줘. \n'
                           '그리고 너는 직원이기 때문에 ~가 될까요? 질문을 할까요? 이런식의 대답은 절대 하지말고 한국 사람이기 때문에 반드시 "한국어"로만 대답해줘. \n'
                           '주문 1개는 6개의 정보로 구성되어 있어. \n'
                           '6개의 정보는 1. 햄버거명 2. 단품/세트 여부 3. 수량 4. 사이드 5. 음료 6. 추가 옵션 순이야 \n'
                           '고객이 주문을 하면 다시 한번 주문 내역을 고객이 말한 내용을 토대로 확인해줘야 해. \n'
                           '그리고 매 대화마다 고객이 여섯개 정보에 대해 모두 말해주지는 않을거야. \n'
                           '그렇기 때문에 고객이 말한 내용을 분석해서 빠진 부분을 물어봐줘야 해. \n'
                           '예를 들어 불고기버거 1개 단품을 주문했다면 사이드, 음료, 추가옵션에 대해 물어봐야겠지? \n'
                           '그리고 만약 고객이 추가 주문을 한다면 위의 순서를 반복해줘. \n'
                           '그리고 고객이 주문 완료를 말하기 전까지는 절대로 너 먼저 "주문이 완료 되었습니다" 라는 식의 대답은 하지 마. \n'
                           '마지막으로 고객이 "주문 완료"라고 말하면 매장에서 식사인지 포장인지 여부를 물어봐.'
            },
            {
                'role': 'user',
                'content': '안녕하세요. 주문 좀 도와주세요'
            },
            {
                'role': 'assistant',
                'content': '안녕하세요. 어떤 메뉴를 주문하시겠어요?'
            }
        ]

    def save_question(self, question):
        self.messages.append(
            {
                'role': 'user',
                'content': f'고객의 요구: {question}',
            }
        )

    def save_response(self, response):
        self.messages.append(
            {
                'role': 'assistant',
                'content': response,
            }
        )

    def final_answer(self):
        self.messages.append(
            {
                'role': 'system',
                'content': "이때까지 주문내역을 부연 설명 없이 무조건 파이썬 리스트 형태로만 나타내줘. 여러 메뉴를 주문할 수 있기 때문에 이중 배열으로 출력해주고 [버거명, 단품/세트 여부, 수량, 사이드, 음료, 추가옵션] 구성이 이중 배열의 요소 1개야. \n"
                           "그리고 만약 세트를 시켰는데 사이드와 콜라에 대한 정보가 없으면 사이드는 감자튀김, 음료는 콜라를 기본값으로 해줘 \n"
                           "그리고 메뉴명에 단품과 세트 라는 단어는 빼서 출력해주고 정보가 없는 내용은 None을 기본값으로 설정해줘 \n"
                           "이건 주문 내역 예시고 반드시 참고만 하길 바랄게! [['빅맥', '세트', 1, '감자튀김', '아메리카노', None], ['상하이버거', '단품', 2, '치즈스틱', '콜라', None]]"
            }
        )

        completion = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=self.messages
        )

        response = completion.choices[0].message.content
        result = self.parse_result(response)
        self.initialize_messages()

        return response, result

    def answer(self, text):
        self.save_question(text)

        completion = openai.ChatCompletion.create(
            model=self.model,
            messages=self.messages,
            stop=['\n']
        )

        response = completion.choices[0].message.content
        self.save_response(response)

        # menu = parse_menu_gpt(text)
        return response

    def parse_result(self, results):
        a = results.find('[[')
        b = results.find(']]')
        print(results)
        results = results[a: b + 2]
        print(results)
        results = eval(results)

        final_menu = []
        for n, result in enumerate(results):
            menu = {
                'id': n,
                'burger': result[0],  # 메뉴명
                'type': result[1],  # 단품 / 세트
                'quantity': result[2],  # 수량
                'side': result[3],  # 사이드
                'beverage': result[4],  # 음료
                'option': result[5],  # 추가 옵션
            }

            parse_iterator(_parse_menu, menu, result[0], **menus)
            final_menu.append(menu)

        return final_menu

if __name__ == '__main__':
    import time
    gpt = GPT()

    text = '불고기버거 세트 하나 주문할건데 감자튀김은 라지로 주시고 음료는 아이스 아메리카노 할게요. 아 그리고 소스 듬뿍 발라주세요'
    start = time.time()
    answer = gpt.answer(text)
    print('질문: ', text)
    print('답변: ', answer)
    print(f'답변 소요시간: {time.time() - start:.2f} \n')

    text = '아.. 상하이도 먹고 싶은데.. 아니다 됐고 그냥 아까 주문한거 그거 주세요'
    start = time.time()
    answer = gpt.answer(text)
    print('질문: ', text)
    print('답변: ', answer)
    print(f'답변 소요시간: {time.time() - start:.2f} \n')

    text = '하나 더 추가하고 싶은데 빅맥 단품으로 두 개 주세요. 음료도 추가할건데 두 개 다 제로콜라 부탁드려요'
    start = time.time()
    answer = gpt.answer(text)
    print('질문: ', text)
    print('답변: ', answer)
    print(f'답변 소요시간: {time.time() - start:.2f} \n')

    text = '어 잠시만요. 음료수 환타로 변경부탁드려요'
    start = time.time()
    answer = gpt.answer(text)
    print('질문: ', text)
    print('답변: ', answer)
    print(f'답변 소요시간: {time.time() - start:.2f} \n')

    final_answer = gpt.final_answer()
    print('================== 주문 내역 =================== \n')
    for answer in eval(final_answer):
        print('메뉴:', answer[0])
        print('단품/세트:', answer[1])
        print('수량:', answer[2])
        print('사이드:', answer[3])
        print('음료:', answer[4])
        print('추가옵션:', answer[5])
        print()
    print('==============================================')