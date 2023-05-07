import { useDispatch } from "react-redux";
import { filterChange } from "../reducers/filterReducer";

const Filter = () => {
  const dispatch = useDispatch();
  const handleChange = (evt) => {
    dispatch(filterChange(evt.target.value));
  };
  const style = { marginBottom: 15 };
  return (
    <div style={style}>
      filter <input type="text" name="filter" onChange={handleChange} />
    </div>
  );
};

export default Filter;
