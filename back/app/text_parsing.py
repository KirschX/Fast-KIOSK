from functools import partial
from .db import *

def parse_option(option, order, text, word, value):
    if word in text:
        order[option] = value

def parse_iterator(parse_func, order, text, **data):
    for key, values in data.items():
        for val in values:
            parse_func(order, text, val, key)

_parse_menu = partial(parse_option, 'burger')
_parse_set = partial(parse_option, 'type')
_parse_amount = partial(parse_option, 'quantity')
_parse_take_out = partial(parse_option, 'isTakeout')
_parse_beverage = partial(parse_option, 'beverage')
_parse_side = partial(parse_option, 'side')
_parse_answer = partial(parse_option, 'answer')

def parse_menu(text):
    order = {
        'ok': False,  # 메뉴명 파싱 성공 여부
        'menu': {},  # 메뉴 정보
        'isTakeout': '매장',  # 포장 / 매장
        'text': text,  # 원본 텍스트
    }

    menu = {
        'burger': None,  # 메뉴명
        'type': '단품',  # 단품 / 세트
        'quantity': 1,  # 수량
        'beverage': '콜라',  # 음료
        'side': '감자튀김',  # 사이드
    }

    parse_iterator(_parse_menu, menu, text, **menus)
    parse_iterator(_parse_set, menu, text, **sets)
    parse_iterator(_parse_amount, menu, text, **amounts)
    parse_iterator(_parse_beverage, menu, text, **beverages)
    parse_iterator(_parse_side, menu, text, **sides)
    parse_iterator(_parse_take_out, order, text, **take_outs)

    order['menu'] = menu
    order['ok'] = menu['burger'] is not None
    order['isTakeout'] = order['isTakeout'] == '포장'
    return order

def parse_answer(text):
    answer = {
        'answer': None,  # 답변 (네 / 아니요)
        'text': text,  # 원본 텍스트
    }
    
    parse_iterator(_parse_answer, answer, text, **answers)

    return answer


if __name__ == '__main__':
    order = parse_menu(text="빙맥 세투 두게 포장 부탁해요")
    print(order)