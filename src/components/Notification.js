// import { useSelector } from "react-redux";
import { connect } from "react-redux";

const Notification = ({ notification }) => {
  // const notification = useSelector((state) => state.notify);

  const style = {
    border: "solid",
    borderColor: "green",
    padding: 10,
    borderWidth: 1,
    marginBottom: 15,
  };
  if (notification) {
    return <div style={style}>you voted "{notification}"</div>;
  }
  return <div></div>;
};

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    notification: state.notify,
  };
};

const ConnectedNote = connect(mapStateToProps)(Notification);
export default ConnectedNote;
