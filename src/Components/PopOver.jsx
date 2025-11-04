import React, { createContext, useContext, useRef, useState } from 'react'
import './pop.css';

const popovercontext = createContext({});

const PopOver = ({children}) => {

    const [isopen, setisopen] = useState(false);
    const contentRef = useRef(null);

    function togglePopOver(){
       setisopen(!isopen);
       //open to commit 
       //open to commit2
    }

  return (
    <popovercontext.Provider value={{contentRef,isopen,togglePopOver}}>
        <div className='popover p-[20%] bg-zinc-500 h-screen'>{children}</div>
    </popovercontext.Provider>
  )
}

export default PopOver

function Action ({label,node,children}){
 
    const {togglePopOver} = useContext(popovercontext);

   if(node){
    return <button onClick={togglePopOver}>{node}</button>
   }

   if(children){
    return <button onClick={togglePopOver} className='bg-red-200 p-3 rounded-lg font-bold'>{children}</button>
   }

   return <button onClick={togglePopOver}>{label}</button>
}

function Content ({children}){
    const {isopen,contentRef} = useContext(popovercontext);
    if(!isopen) return null;
    return <div className='content'>{children}</div>
}

PopOver.Action = Action;
PopOver.Content = Content;

