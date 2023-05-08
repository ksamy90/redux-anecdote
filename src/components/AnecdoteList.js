import { useSelector, useDispatch } from "react-redux";
import { voteNote } from "../reducers/anecdoteReducer";
import { clearNote, showNote } from "../reducers/notificationReducer";
import Filter from "./Filter";
import Notification from "./Notification";

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state.notes);
  const filterNotes = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      {anecdotes
        .filter((note) => note.content.includes(filterNotes))
        .sort((a, b) => b.votes - a.votes)
        .map((anecdote) => {
          const handleVotes = async () => {
            dispatch(voteNote(anecdote.id));
            dispatch(showNote(anecdote.content));
            setTimeout(() => {
              dispatch(clearNote(""));
            }, 8000);
          };
          return (
            <div key={anecdote.id}>
              <div>{anecdote.content}</div>
              <div>
                has {anecdote.votes}
                <button onClick={handleVotes}>vote</button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default AnecdoteList;
