import React, { useState } from "react";

const SearchBar = () => {
  const [text, setText] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    console.log(text);
    setText("");
  }

  return (
    <div className="h-screen w-full bg-zinc-700 flex gap-10 p-7">
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
