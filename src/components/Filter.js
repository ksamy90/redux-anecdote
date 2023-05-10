// import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { filterChange } from "../reducers/filterReducer";

const Filter = ({ filterChange }) => {
  // const dispatch = useDispatch();
  const handleChange = (evt) => {
    // dispatch(filterChange(evt.target.value));
    filterChange(evt.target.value);
  };
  const style = { marginBottom: 15 };
  return (
    <div style={style}>
      filter <input type="text" name="filter" onChange={handleChange} />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterChange: (value) => dispatch(filterChange(value)),
  };
};

const ConnectedFilter = connect(null, mapDispatchToProps)(Filter);

export default ConnectedFilter;
