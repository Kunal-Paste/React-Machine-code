import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increaseByAmount,
  increment,
} from "../redux/featureSlice/counterSlice";

const Bankdepo = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const [num, setNum] = useState(5);

  return (
    <div className="h-screen w-full bg-zinc-800 text-white flex flex-col justify-center items-center gap-7">
      <h1>{count}</h1>
      <div className="flex gap-7">
        <button
          className="p-3 bg-green-400 rounded-3xl"
          onClick={() => {
            dispatch(increment());
          }}
        >
          Deposit
        </button>
        <button
          className="p-3 bg-green-400 rounded-3xl"
          onClick={() => {
            dispatch(decrement());
          }}
        >
          Withdraw
        </button>

        <input type="number"
        value={num}
        onChange={(e)=>{
          setNum(e.target.value)
        }}
         className="bg-black text-white text-center"
         />

        <button
          className="p-3 bg-green-400 rounded-3xl"
          onClick={() => {
            dispatch(increaseByAmount(Number(num)));
          }}
        >
          Deposit By Amount
        </button>
      </div>
    </div>
  );
};

export default Bankdepo;
