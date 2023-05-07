import { useSelector, useDispatch } from "react-redux";
import { vote } from "../reducers/anecdoteReducer";
import Filter from "./Filter";

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state.notes);
  const filterNotes = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter />
      {anecdotes
        .filter((note) => note.content.includes(filterNotes))
        .sort((a, b) => b.votes - a.votes)
        .map((anecdote) => (
          <div key={anecdote.id}>
            <div>{anecdote.content}</div>
            <div>
              has {anecdote.votes}
              <button onClick={() => dispatch(vote(anecdote.id))}>vote</button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default AnecdoteList;
