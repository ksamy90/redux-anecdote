// import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { createDote } from "../reducers/anecdoteReducer";
import { showNote, clearNote } from "../reducers/notificationReducer";

const AnecdoteForm = ({ createDote, showNote, clearNote }) => {
  // const dispatch = useDispatch();

  const addNote = async (evt) => {
    evt.preventDefault();
    const content = evt.target.note.value;
    evt.target.note.value = "";
    // dispatch(createDote(content));
    // dispatch(showNote(content));
    createDote(content);
    showNote(content);
    setTimeout(() => {
      // dispatch(clearNote(""));
      clearNote("");
    }, 3000);
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

const mapDispatchToProps = (dispatch) => {
  return {
    createDote: (data) => dispatch(createDote(data)),
    showNote: (data) => dispatch(showNote(data)),
    clearNote: (data) => dispatch(clearNote(data)),
  };
};

const ConnectedForm = connect(null, mapDispatchToProps)(AnecdoteForm);
export default ConnectedForm;
