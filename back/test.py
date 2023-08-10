import requests

response = requests.post(
    url='https://sr-kiosk-api-shs2783.koyeb.app/api/stt/menu',
    headers={
        'accept': 'application/json',
    },
    files={'audio_file': open('audio.mp3', 'rb')},
)
print(response.json())

response = requests.post(
    url='https://sr-kiosk-api-shs2783.koyeb.app/api/stt/answer',
    headers={
        'accept': 'application/json',
    },
    files={'audio_file': open('audio.mp3', 'rb')},
)
print(response.json())

response = requests.post(
    url='https://sr-kiosk-api-shs2783.koyeb.app/api/text/menu',
    headers={'accept': 'application/json'},
    json={'text': '빅맥 3개 포장 세트로 주세요'},
)
print(response.json())

response = requests.post(
    url='https://sr-kiosk-api-shs2783.koyeb.app/api/text/answer',
    headers={'accept': 'application/json'},
    json={'text': '아니요'},
)
print(response.json())