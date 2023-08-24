import { createAsyncThunk } from "@reduxjs/toolkit";

export const processVoiceToOrderState = createAsyncThunk(
  "order/processVoiceForOrder",
  async (audioToSend: Blob) => {
    const formData = new FormData();
    formData.append("audio_file", audioToSend, "audio.webm");

    const response = await fetch(
      "https://sr-kiosk-api-shs2783.koyeb.app/api/stt/menu",
      {
        method: "POST",
        headers: {
          accept: "application/json",
        },
        body: formData,
      }
    );

    const result = await response.json();

    if (!response.ok) {
      throw new Error("Server responded with a non-200 status");
    }

    return result.menu;
  }
);
