import { useSelector, useDispatch } from "react-redux";
import { vote } from "../reducers/anecdoteReducer";
import { clearNote, showNote } from "../reducers/notificationReducer";
import Filter from "./Filter";
import Notification from "./Notification";
import anecdoteService from "../services/anecdotes";

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
            const addVote = await anecdoteService.editNote(anecdote.id);
            dispatch(vote(addVote.id));
            dispatch(showNote(addVote.content));
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
