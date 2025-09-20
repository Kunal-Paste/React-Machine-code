import React from 'react'
import StarRating from './Components/StarRating'
import PopOver from './Components/PopOver';
import StopWatch from './stopwatch/StopWatch';

const App = () => {
  const handleChange = (value) =>{
     console.log(value);
     
  }
  return (
    <div>
      {/* <StarRating value={0} onChange={handleChange}/> */}
      {/* <PopOver>
        <PopOver.Action>Click Me</PopOver.Action>
        <PopOver.Content>Hello There</PopOver.Content>
      </PopOver> */}
      <StopWatch/>
    </div>
  )
}

export default App