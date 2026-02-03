import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/searchSlice/searchSlice";

const SearchBar = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  function submitHandler(e) {
    e.preventDefault();
    dispatch(setQuery(text));
    // console.log(text);
    setText("");
  }

  return (
    <div className="flex gap-10 p-7">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="h-[3rem] w-full p-10 flex gap-[1rem] justify-center items-center"
      >
        <input
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          required
          type="text"
          className="border border-white h-[3rem] w-full bg-transparent rounded-3xl content-center text-center text-white text-[1.5rem]"
        />
        <button className="bg-red-400 p-[.5rem] text-center rounded-[.5rem] active:scale-95">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
