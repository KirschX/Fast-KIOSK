from functools import partial
from .db import menus, sets, amounts, take_outs, answers

def parse_option(option, order, text, word, value):
    if word in text:
        order[option] = value

def parse_iterator(parse_func, order, text, **data):
    for key, values in data.items():
        for val in values:
            parse_func(order, text, val, key)

_parse_menu = partial(parse_option, 'menu')
_parse_amount = partial(parse_option, 'amount')
_parse_set = partial(parse_option, 'set')
_parse_take_out = partial(parse_option, 'take_out')
_parse_answer = partial(parse_option, 'answer')

def parse_menu(text):
    order = {
        'menu': None,  # 메뉴명
        'set': '단품',  # 단품 / 세트
        'amount': 1,  # 수량
        'take_out': '매장',  # 포장 / 매장
    }

    parse_iterator(_parse_menu, order, text, **menus)
    parse_iterator(_parse_set, order, text, **sets)
    parse_iterator(_parse_amount, order, text, **amounts)
    parse_iterator(_parse_take_out, order, text, **take_outs)

    return order

def parse_answer(text):
    answer = {'answer': None}
    parse_iterator(_parse_answer, answer, text, **answers)

    return answer


if __name__ == '__main__':
    order = parse_menu(text="빙맥 세투 두게 포장 부탁해요")
    print(order)