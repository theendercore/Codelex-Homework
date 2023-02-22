import { useAppDispatch, useAppSelector } from "../app/hooks";
import { decrement, increment, selectCount } from "./counterSlice";

export default function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col">
      Have number : {`${count}`}
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}
