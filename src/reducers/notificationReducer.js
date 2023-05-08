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
export const showNotifications = (notify, timer) => {
  return (dispatch) => {
    dispatch(showNote(notify));
    setTimeout(() => {
      dispatch(clearNote(""));
    }, timer);
  };
};
export default messageNote.reducer;
