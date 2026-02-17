import React from "react";
import StarRating from "./Components/StarRating";
import PopOver from "./Components/PopOver";
import StopWatch from "./stopwatch/StopWatch";
import SuggestionBar from "./suggestionBar/SuggestionBar";
import Bankdepo from "./BankDeposit/Bankdepo";
import SearchBar from "./Components/SearchBar";
import Tabs from "./Components/Tabs";
import ResultGrid from "./Components/ResultGrid";

const App = () => {
  return (
    <div className="h-screen w-full bg-zinc-700">
      {/* <StarRating value={0} onChange={handleChange}/> */}
      {/* <PopOver>
        <PopOver.Action>Click Me</PopOver.Action>
        <PopOver.Content>Hello There</PopOver.Content>
      </PopOver> */}

      {/* <StopWatch /> */}

      {/* <SuggestionBar/> */}
      {/* <Bankdepo/> */}

      <SearchBar/>
      <Tabs/>
      <ResultGrid/>
      
    </div>
  );
};

export default App;
