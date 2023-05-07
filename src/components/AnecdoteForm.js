import { useDispatch } from "react-redux";
import { newNote } from "../reducers/anecdoteReducer";
import { showNote } from "../reducers/notificationReducer";

const AnecdoteForm = () => {
  const dispatch = useDispatch();
  const addNote = (evt) => {
    evt.preventDefault();
    const content = evt.target.note.value;
    evt.target.note.value = "";
    dispatch(newNote(content));
    dispatch(showNote(content));
  };
  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addNote}>
        <div>
          <input name="note" />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default AnecdoteForm;
