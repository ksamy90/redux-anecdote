import { useDispatch } from "react-redux";
import { newNote } from "../reducers/anecdoteReducer";
import { showNote, clearNote } from "../reducers/notificationReducer";
import anecdotes from "../services/anecdotes";

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const addNote = async (evt) => {
    evt.preventDefault();
    const content = evt.target.note.value;
    evt.target.note.value = "";
    const newDote = await anecdotes.createNew(content);
    dispatch(newNote(newDote));
    dispatch(showNote(newDote.content));
    setTimeout(() => {
      dispatch(clearNote(""));
    }, 4000);
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
