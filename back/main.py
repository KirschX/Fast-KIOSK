import openai

from fastapi import FastAPI, UploadFile
from fastapi.exceptions import HTTPException

from text_parsing import parse_menu, parse_answer

openai.api_key = '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'

app = FastAPI()

def save_audio_file(contents, audio_file_name="audio.mp3"):
    with open(audio_file_name, "wb") as f:
        f.write(contents)

        audio_file = open(audio_file_name, "rb")
        return audio_file

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