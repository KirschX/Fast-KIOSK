import requests

files = open('audio.mp3', 'rb')
upload = {'audio_file': files}

response = requests.post(
    url='https://sr-kiosk-api-shs2783.koyeb.app/api/stt/menu',
    headers={
        'accept': 'application/json',
        # 'Content-Type': 'multipart/form-data',
    },
    files=upload,
)

# print(response.json())


# response = requests.post(
#     url='https://sr-kiosk-api-shs2783.koyeb.app/api/text/answer',
#     headers={'accept': 'application/json'},
#     json={'text': '아니요 알겠습니다'},
# )

print(response.json())