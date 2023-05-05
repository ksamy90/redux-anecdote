import { useDispatch } from "react-redux";
import { newNote } from "../reducers/anecdoteReducer";

const AnecdoteForm = () => {
  const dispatch = useDispatch();
  const addNote = (evt) => {
    evt.preventDefault();
    const content = evt.target.note.value;
    evt.target.note.value = "";
    dispatch(newNote(content));
  };
  return (
    <form onSubmit={addNote}>
      <div>
        <input name="note" />
      </div>
      <button type="submit">create</button>
    </form>
  );
};

export default AnecdoteForm;
