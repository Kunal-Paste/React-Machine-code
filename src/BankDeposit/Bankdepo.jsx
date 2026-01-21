import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/featureSlice/counterSlice';

const Bankdepo = () => {
   
    const dispatch = useDispatch();
    const count = useSelector((state)=>state.counter.value);

  return (
    <div className='h-screen w-full bg-zinc-800 text-white flex flex-col justify-center items-center gap-7'>
        <h1>{count}</h1>
        <div className='flex gap-7'>
            <button className='p-3 bg-green-400 rounded-3xl'
              onClick={()=>{
                dispatch(increment())
              }}
            >Deposit</button>
            <button className='p-3 bg-green-400 rounded-3xl'
            onClick={()=>{
                dispatch(decrement())
            }}
            >Withdraw</button>
        </div>
    </div>
  )
}

export default Bankdepo