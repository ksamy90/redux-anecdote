import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const messageNote = createSlice({
  name: "notify",
  initialState,
  reducers: {
    showNote(_state, action) {
      return action.payload;
    },
  },
});

export const { showNote } = messageNote.actions;
export default messageNote.reducer;
