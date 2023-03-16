import { useSelector, useDispatch } from "react-redux";
import { incrementByAmount, decrement } from "../slices/counterSlice";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1> {counter} </h1>
      <button
        onClick={() => {
          dispatch(incrementByAmount(3));
        }}
      >
        +
      </button>

      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
    </div>
  );
};
export default Counter;
