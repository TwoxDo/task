
import React from "react";
import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");

  const [newWords, setNewWords] = useState("");

  const [words, setWords] = useState([]);

  const [list, setList] = useState([]);



  const handelSubmit = (e) => {
    e.preventDefault();
    words.map((word) => {
      if (text.includes(word)) {
        setList((pervWords) => [...pervWords, word])
      }
      return word;
    });
  };



  const handleAdd = (e) => {
    e.preventDefault();
    const word = newWords.trim();

    if (word && !words.includes(word)) {
      setWords((pervWords) => [...pervWords, word]);
    }
    setNewWords("");
  };


  return (
    <div>
      <form onSubmit={handelSubmit}>
        <label>
          <span>Text</span>
          <div>
            <input
              type="text"
              onChange={(e) => setText(e.target.value)}
            ></input>
          </div>
        </label>

        <label>
          <span>words</span>
          <div>
            <input
              onChange={(e) => {
                setNewWords(e.target.value);
              }}
              value={newWords}
              type="text"
            />
            <button onClick={handleAdd} className="btn">
              Add
            </button>
          </div>
        </label>

        <p>
          Current Words:{" "}
          {words.map((word) => (
            <em key={word}>{word}, </em>
          ))}
        </p>
        <button>Submit </button>
      </form>

      <div>
        {list.map((w) => (
          <ul key={w}>
            <li>{w}</li>
          </ul>
        ))}
      </div>
    </div>
  );
}
