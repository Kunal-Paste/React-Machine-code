import React, { useState } from 'react'
import Starsvg from './Starsvg';
import "./Star.css";

const NUMBER_OF_STARS = 5;

const StarRating = (value=0,onChange,numverofstars=NUMBER_OF_STARS) => {
    const [hoverIndex, sethoverIndex] = useState(-1);
    const [clickIndex, setclickIndex] = useState(value-1);
    function handleClick (index) {
        return ()=> {
            setclickIndex(index);
            console.log(clickIndex);
            
        //    onChange(index+1)
        }
    }

    function handleHover (index) {
        return ()=>{
            sethoverIndex(index);
        }
    }

    function handleLeave () {
        return ()=>{
            sethoverIndex(-1)
        }
    }
  return (
    <div className='star-rating flex gap-5 justify-center items-center'>
        {[...new Array(numverofstars)].map((_,index)=>{
            let className = '';
            if(index<=clickIndex){
                className='active';
            }

            if(index<=hoverIndex){
                className += ' hovered';
            }
            return <button key={index} onClick={handleClick(index)} onMouseEnter={handleHover(index)} onMouseLeave={handleLeave()} className={`bg-none border-none p-0 cursor-pointer ${className}`}>
                <Starsvg key={index}/> 
            </button>
        })}
    </div>
  )
}

export default StarRating