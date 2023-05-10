import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const messageNote = createSlice({
  name: "notify",
  initialState,
  reducers: {
    showNote(_state, action) {
      return action.payload;
    },
    clearNote(_state, action) {
      return action.payload;
    },
  },
});

export let timer;
export let runTimer;

export const { showNote, clearNote } = messageNote.actions;
export const showNotifications = (notify) => {
  return (dispatch) => {
    dispatch(showNote(notify));
    runTimer = () => {
      timer = window.setTimeout(() => {
        dispatch(clearNote(""));
      }, 5000);
    };
    runTimer();
  };
};
export default messageNote.reducer;
