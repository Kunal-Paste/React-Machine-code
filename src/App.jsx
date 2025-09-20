import React from 'react'
import StarRating from './Components/StarRating'
import PopOver from './Components/PopOver';

const App = () => {
  const handleChange = (value) =>{
     console.log(value);
     
  }
  return (
    <div>
      {/* <StarRating value={0} onChange={handleChange}/> */}
      <PopOver>
        <PopOver.Action>Click Me</PopOver.Action>
        <PopOver.Content>Hello There</PopOver.Content>
      </PopOver>
    </div>
  )
}

export default App