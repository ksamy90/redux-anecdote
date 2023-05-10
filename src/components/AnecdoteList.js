// import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
import { voteNote } from "../reducers/anecdoteReducer";
import {
  runTimer,
  showNotifications,
  timer1,
} from "../reducers/notificationReducer";
import Filter from "./Filter";
import Notification from "./Notification";

const AnecdoteList = (props) => {
  // const anecdotes = useSelector((state) => state.notes);
  // const filterNotes = useSelector((state) => state.filter);
  // const dispatch = useDispatch();

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      {props.anecdotes
        .filter((note) => note.content.includes(props.filterNotes))
        .sort((a, b) => b.votes - a.votes)
        .map((anecdote) => {
          const handleVotes = () => {
            // dispatch(voteNote(anecdote.id));
            props.voteNote(anecdote.id);
            // dispatch(showNote(anecdote.content));
            // setTimeout(() => {
            //   dispatch(clearNote(""));
            // }, 8000);
            // dispatch(showNotifications(anecdote.content, 5000));
            props.showNotifications(anecdote.content);
            console.log(timer1);
            window.clearTimeout(timer1);
            setTimeout(() => {
              runTimer();
            }, 4000);
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

const mapStateToProps = (state) => {
  return {
    anecdotes: state.notes,
    filterNotes: state.filter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    voteNote: (id) => dispatch(voteNote(id)),
    showNotifications: (data) => dispatch(showNotifications(data)),
  };
};

const ConnectedList = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList);

export default ConnectedList;
