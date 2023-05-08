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

export const { showNote, clearNote } = messageNote.actions;
const timer = setTimeout(() => {
  clearNote("");
}, 3000);
export const showNotifications = (notify) => {
  return (dispatch) => {
    dispatch(showNote(notify));
    setTimeout(() => {
      dispatch(clearNote(""));
    }, 5000);
  };
};
export default messageNote.reducer;
