import sys
sys.path.append('./app')

import os
import openai

from fastapi import FastAPI, UploadFile
from fastapi.exceptions import HTTPException
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware

from pydantic import BaseModel

from .text_parsing import parse_menu, parse_answer, parse_pay
from .assistant import Assistant

from dotenv import load_dotenv
load_dotenv()

openai.api_key = os.getenv("OPENAI_API_KEY")
assistant = Assistant()

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

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
            "API_instruction.pdf",
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

@app.post("/api/stt/pay")
async def speech_to_text_pay(audio_file: UploadFile):
    contents = await audio_file.read()
    audio_file = save_audio_file(contents)

    try:
        transcript = openai.Audio.transcribe("whisper-1", audio_file)
    except:
        raise HTTPException(status_code=400, detail="Failed to load audio file")

    if not transcript:
        raise HTTPException(status_code=400, detail="Failed to decode audio")

    return parse_pay(transcript.text)

# @app.post("/api/stt/gpt")
# async def speech_to_text_from_gpt(audio_file: UploadFile):
#     contents = await audio_file.read()
#     audio_file = save_audio_file(contents)
#
#     try:
#         transcript = openai.Audio.transcribe("whisper-1", audio_file)
#     except:
#         raise HTTPException(status_code=400, detail="Failed to load audio file")
#
#     if not transcript:
#         raise HTTPException(status_code=400, detail="Failed to decode audio")
#
#     text = transcript.text
#     if '포장' in text:
#         try:
#             answer, menu = gpt.final_answer()
#             response = {
#                 'ok': True,
#                 'context': {'question': text, 'answer': '네 알겠습니다. 주문 내역을 확인해주세요'},
#                 'menu': menu,
#                 'isTakeout': True
#             }
#         except:
#             import traceback
#             print(traceback.format_exc())
#             raise HTTPException(status_code=400, detail="GPT API Error")
#     elif '매장' in text:
#         try:
#             answer, menu = gpt.final_answer()
#             response = {
#                 'ok': True,
#                 'context': {'question': text, 'answer': '네 알겠습니다. 주문 내역을 확인해주세요'},
#                 'menu': menu,
#                 'isTakeout': False
#             }
#         except:
#             import traceback
#             print(traceback.format_exc())
#             raise HTTPException(status_code=400, detail="GPT API Error")
#     else:
#         answer, menu = gpt.answer(text)
#         response = {
#             'ok': False,
#             'context': {'question': text, 'answer': answer},
#             'menu': menu,
#             'isTakeout': None
#         }
#
#     return response

@app.post("/api/stt/gpt")
async def speech_to_text_from_gpt(audio_file: UploadFile):
    contents = await audio_file.read()
    audio_file = save_audio_file(contents)

    try:
        transcript = openai.Audio.transcribe("whisper-1", audio_file)
    except:
        raise HTTPException(status_code=400, detail="Failed to load audio file")

    if not transcript:
        raise HTTPException(status_code=400, detail="Failed to decode audio")

    return assistant.take_order(transcript.text)

@app.get("/api/stt/gpt")
async def reset_context():
    assistant.gpt.initialize_messages()
    return {'ok': True}

@app.post("/api/text/menu")
async def parse_text_menu(text: Text):
    return parse_menu(text.text)

@app.post("/api/text/answer")
async def parse_text_answer(text: Text):
    return parse_answer(text.text)
