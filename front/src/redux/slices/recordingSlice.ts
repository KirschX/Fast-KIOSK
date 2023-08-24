import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recording: false,
  audioBlob: null,
  loading: false,
};

const recordingSlice = createSlice({
  name: "recording",
  initialState,
  reducers: {
    setRecording: (state, action) => {
      state.recording = action.payload;
    },
    setAudioBlob: (state, action) => {
      state.audioBlob = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setRecording, setAudioBlob, setLoading } =
  recordingSlice.actions;
export default recordingSlice.reducer;
