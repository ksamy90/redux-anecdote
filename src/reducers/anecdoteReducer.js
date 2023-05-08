import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const doteSlice = createSlice({
  name: "dotes",
  initialState,
  // dispatch({type:'dotes/newNote',payload:'redux architecture'})
  reducers: {
    newNote(state, action) {
      state.push(action.payload);
    },
    vote(state, action) {
      const id = action.payload;
      const noteToChange = state.find((note) => note.id === id);
      const changedNote = {
        ...noteToChange,
        votes: noteToChange.votes + 1,
      };
      return state.map((item) => (item.id !== id ? item : changedNote));
    },
    setNotes(_state, action) {
      return action.payload;
    },
  },
});
export const { vote, newNote, setNotes } = doteSlice.actions;
export default doteSlice.reducer;
