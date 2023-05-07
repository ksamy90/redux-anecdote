import { useSelector, useDispatch } from "react-redux";
import { showNote } from "../reducers/notificationReducer";

const Notification = () => {
  const notification = useSelector((state) => state.notify);
  const votes = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  const itemVotes = votes.map((vote) => {
    return vote.content;
  });
  console.log(itemVotes);
  // setTimeout(() => {
  //   dispatch(showNote(itemVotes[0]));
  // }, 5000);

  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
    marginBottom: 15,
  };
  if (notification) {
    return <div style={style}>you voted "{notification}"</div>;
  }
  return <div></div>;
};

export default Notification;
