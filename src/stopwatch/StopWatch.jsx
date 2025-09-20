import React, { useRef, useState } from 'react'

const StopWatch = () => {

    const [time, setTime] = useState(0);
    const startedSinceRef = useRef(0);
    const intervalRef = useRef(null);

    function handleStart() {
        // alert('ok');
        if (intervalRef.current) {
            return;
        }

        startedSinceRef.current = Date.now() - time  // so that when we click on pause then we click on start then time should not reset again .
        intervalRef.current = setInterval(() => {
            setTime(() => {
                return Date.now() - startedSinceRef.current;
            })
        }, 10)
    }

    function handlePause() {
        clearInterval(intervalRef.current);
        intervalRef.current = null
    }

    function handleReset() {
        setTime(0);
        startedSinceRef.current = 0;
        clearInterval(intervalRef.current);
        intervalRef.current = null;
    }

    function getTime() {
        const milisecond = Math.floor((time % 1000) / 10).toString().padStart(2, "0");
        const second = Math.floor((time / 1000) % 60).toString().padStart(2, '0');
        const minutes = Math.floor((time / (1000 * 60)) % 60).toString().padStart(2, '0');
        const hours = Math.floor(time / (1000 * 3600)).toString().padStart(2, '0');

        return `${hours}:${minutes}:${second}:${milisecond}`
    }

    return (
        <div className='bg-zinc-700 h-screen w-full flex flex-col justify-center items-center gap-10'>
            <div className='timer bg-red-300 h-[3rem] w-[28rem] flex flex-col justify-center items-center text-[3rem] p-10 font-black'>
                <span className='w-[18rem]'>{getTime()}</span>
            </div>
            <div className='buttons flex gap-5'>
                <button onClick={handleStart} className='bg-violet-300 h-[3rem] w-[9rem] text-[2rem] font-bold rounded-full text-center uppercase'>start</button>
                <button onClick={handlePause} className='bg-violet-300 h-[3rem] w-[9rem] text-[2rem] font-bold rounded-full text-center uppercase'>pause</button>
                <button onClick={handleReset} className='bg-violet-300 h-[3rem] w-[9rem] text-[2rem] font-bold rounded-full text-center uppercase'>reset</button>
            </div>
        </div>
    )
}

export default StopWatch