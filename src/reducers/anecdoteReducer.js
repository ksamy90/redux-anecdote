import { createSlice } from "@reduxjs/toolkit";
import anecdoteService from "../services/anecdotes";

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

export const initializeNotes = () => {
  return async (dispatch) => {
    const notes = await anecdoteService.getAll();
    dispatch(setNotes(notes));
  };
};

export const createDote = (content) => {
  return async (dispatch) => {
    const note = await anecdoteService.createNew(content);
    dispatch(newNote(note));
  };
};

export const voteNote = (id) => {
  return async (dispatch) => {
    const note = await anecdoteService.editNote(id);
    dispatch(vote(note.id));
  };
};

export default doteSlice.reducer;
