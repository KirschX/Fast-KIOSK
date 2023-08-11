import os
import openai

from fastapi import FastAPI, UploadFile
from fastapi.exceptions import HTTPException
from fastapi.responses import FileResponse
from pydantic import BaseModel

from .text_parsing import parse_menu, parse_answer

from dotenv import load_dotenv
load_dotenv()

openai.api_key = os.getenv("OPENAI_API_KEY")

app = FastAPI()

class Text(BaseModel):
    text: str

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

@app.get('/pdf')
async def get_pdf():
    return FileResponse(
            "API 설명서.pdf",
            media_type="application/pdf",
            filename="API_설명서.pdf"
            )

@app.post("/api/stt/menu")
async def speech_to_text_menu(audio_file: UploadFile):
    contents = await audio_file.read()
    audio_file = save_audio_file(contents)

    try:
        transcript = openai.Audio.transcribe("whisper-1", audio_file)
    except:
        raise HTTPException(status_code=400, detail="Failed to load audio file")

    if not transcript:
        raise HTTPException(status_code=400, detail="Failed to decode audio")

    return parse_menu(transcript.text)

@app.post("/api/stt/answer")
async def speech_to_text_answer(audio_file: UploadFile):
    contents = await audio_file.read()
    audio_file = save_audio_file(contents)

    try:
        transcript = openai.Audio.transcribe("whisper-1", audio_file)
    except:
        raise HTTPException(status_code=400, detail="Failed to load audio file")

    if not transcript:
        raise HTTPException(status_code=400, detail="Failed to decode audio")

    return parse_answer(transcript.text)

@app.post("/api/text/menu")
async def parse_text_menu(text: Text):
    return parse_menu(text.text)

@app.post("/api/text/answer")
async def parse_text_answer(text: Text):
    return parse_answer(text.text)