import os
import openai

from fastapi import FastAPI, UploadFile
from fastapi.exceptions import HTTPException

from text_parsing import parse_menu, parse_answer

from dotenv import load_dotenv
load_dotenv()

openai.api_key = os.getenv("OPENAI_API_KEY")

app = FastAPI()

def save_audio_file(contents, audio_file_name="audio.mp3"):
    with open(audio_file_name, "wb") as f:
        f.write(contents)

        audio_file = open(audio_file_name, "rb")
        return audio_file

@app.get("/")
async def root():
    return {
        '/': 'root',
        '/pdf': 'API 설명서.pdf',
        '/api/stt/menu': '음성으로부터 단어 추출 (메뉴)',
        '/api/stt/answer': '음성으로부터 단어 추출  (답변)',
        '/api/text/menu': '텍스트로부터 단어 추출 (메뉴)',
        '/api/text/answer': '텍스트로부터 단어 추출 (답변)',
        }


@app.post("/api/stt/menu")
async def speech_to_text(audio_file: UploadFile):
    contents = await audio_file.read()
    audio_file = save_audio_file(contents)

    try:
        transcript = openai.Audio.transcribe("whisper-1", audio_file)
    except:
        return HTTPException(status_code=400, detail="Failed to load audio file")

    if not transcript:
        return HTTPException(status_code=400, detail="Failed to decode audio")

    return parse_menu(transcript)

@app.post("/api/stt/answer")
async def speech_to_text(audio_file: UploadFile):
    contents = await audio_file.read()
    audio_file = save_audio_file(contents)

    try:
        transcript = openai.Audio.transcribe("whisper-1", audio_file)
    except:
        return HTTPException(status_code=400, detail="Failed to load audio file")

    if not transcript:
        return HTTPException(status_code=400, detail="Failed to decode audio")

    return parse_answer(transcript)

@app.post("/api/text-parsing")
async def parse_text(text: str):
    return parse_menu(text)