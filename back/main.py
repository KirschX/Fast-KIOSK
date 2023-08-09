from fastapi import FastAPI
import openai
from fastapi import UploadFile
from fastapi.exceptions import HTTPException

openai.api_key = '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'

app = FastAPI()

def save_audio_file(contents, audio_file_name="audio.mp3"):
    with open(audio_file_name, "wb") as f:
        f.write(contents)

        audio_file = open(audio_file_name, "rb")
        return audio_file

@app.post("/api/stt")
async def speech_to_text(audio_file: UploadFile):
    contents = await audio_file.read()
    audio_file = save_audio_file(contents)

    try:
        transcript = openai.Audio.transcribe("whisper-1", audio_file)
    except:
        return HTTPException(status_code=400, detail="Failed to load audio file")

    if not transcript:
        return HTTPException(status_code=400, detail="Failed to decode audio")

    return transcript