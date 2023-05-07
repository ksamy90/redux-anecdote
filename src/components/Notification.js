import { useSelector } from "react-redux";

const Notification = () => {
  const notification = useSelector((state) => state.notify);

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

export default Notification;
