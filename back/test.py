import requests

files = open('audio.mp3', 'rb')
upload = {'audio_file': files}

response = requests.post(
    url='http://127.0.0.1:8000/api/stt/menu',
    headers={
        'accept': 'application/json',
        # 'Content-Type': 'multipart/form-data',
    },
    files=upload,
)

print(response.json())