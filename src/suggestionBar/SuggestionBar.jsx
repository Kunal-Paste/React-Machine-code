import { useEffect, useRef, useState } from "react";
import "./Suggestion.css";

// this is a  Mock Server for suggestion
const FAILURE_COUNT = 10;
const LATENCY = 200;

function getRandomBool(n) {
  const threshold = 1000;
  if (n > threshold) n = threshold;
  return Math.floor(Math.random() * threshold) % n === 0;
}

function getSuggestions(text) {
  var pre = "pre";
  var post = "post";
  var results = [];
  if (getRandomBool(2)) {
    results.push(pre + text);
  }
  if (getRandomBool(2)) {
    results.push(text);
  }
  if (getRandomBool(2)) {
    results.push(text + post);
  }
  if (getRandomBool(2)) {
    results.push(pre + text + post);
  }
  return new Promise((resolve, reject) => {
    const randomTimeout = Math.random() * LATENCY;
    setTimeout(() => {
      if (getRandomBool(FAILURE_COUNT)) {
        reject();
      } else {
        resolve(results);
      }
    }, randomTimeout);
  });
}

const SuggestionBar = () => {
  const [visible, setVisible] = useState(false); //state variable for visibility of searchbox
  const [searchValue, setSearchValue] = useState(""); // state variable for search bar values
  const [list, updateList] = useState([]);
  const inputRef = useRef();
  const suggestionRef = useRef();

  //handle change function:
  function handleChange(e) {
    const { value } = e.target;
    setSearchValue(value);
    makeSuggestioncall(value);
  }

  //function for apiCalling:
  const makeSuggestioncall = async (data) => {
    try {
      let res = await getSuggestions(data);
      updateList(res);
    } catch (e) {
      updateList([]);
      console.log("error occured while getting your suggestions", e);
    }
  };

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (e.target !== inputRef.current && e.target !== suggestionRef.current) {
        setVisible(false);
      }
    });

    return () => {
      window.removeEventListener("click", () => {});
    };
  });

  return (
    <div className="flex flex-col gap-1 justify-center items-center mt-[13rem]">
      <input
        ref={inputRef}
        onChange={handleChange} // small mistake we have to write onchange not onclick for input tag
        value={searchValue}
        onFocus={() => setVisible(true)}
        type="text"
        placeholder="search your item"
        id="search"
        className="border border-red-600 h-[3rem] w-[28rem] text-start p-2 outline-none"
      />
      {visible && (
        <div
          ref={suggestionRef}
          className="suggestion-box border border-gray-950 h-[15rem] w-[30rem] p-2"
        >
          {list.map((e) => (
            <div onClick={() => setSearchValue(e)}>{e}</div> // error i made now and previously was that i should use ()=> in onclick before a function otherwise i'm getting a component rerender error.
          ))}
        </div>
      )}
    </div>
  );
};

export default SuggestionBar;
