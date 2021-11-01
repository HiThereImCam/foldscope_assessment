import { useState } from "react";
import calculateCharQueue from "./util/calculateCharQueue";
import calculateCharCount from "./util/calculateCharCount";
import getFrequentChars from "./util/getFrequentChars";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");

  const charQueue = calculateCharQueue(inputValue);
  const charCount = calculateCharCount(inputValue);
  const frequentChars = getFrequentChars(charQueue, charCount);

  let highlight = (e) => {};

  let handleChange = (e) => {
    let currentInputVal = e.currentTarget.innerHTML;

    setInputValue(currentInputVal);
  };

  return (
    <div className="App">
      <div className="highlight_colors"></div>
      <div
        // ref={inputRef}
        onInput={(e) => {
          handleChange(e);
          highlight(e);
        }}
        contentEditable="true"
        data-text="Enter password"
        className="textbox"
      ></div>

      {charQueue.map((char) => (
        <div key={char}>
          {char}: {charCount[char]}
        </div>
      ))}
    </div>
  );
}

export default App;
