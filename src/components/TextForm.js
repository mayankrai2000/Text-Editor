import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClear = () => {
      setText("");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
     var text = document.getElementById("myBox");
     text.select();
     navigator.clipboard.writeText(text.value);
  }

  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style={{color: props.mode == 'dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className={`form-control text-${props.mode == 'dark'?'light':'dark'}`}
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor: props.mode == 'dark'?'gray':'white'}}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick={handleUpClick}>
          Convert to Upper Case
        </button>
        <button className="btn btn-primary mx-3" onClick={handleLowClick}>
          Convert to Lower Case
        </button>
        <button className="btn btn-primary mx-3" onClick={handleClear}>
          Clear
        </button>
        <button className="btn btn-primary mx-3" onClick={handleCopy}>
          Copy
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode == 'dark'?'white':'black'}}>
          <h2>Your text summary</h2>
          <p>{text.split(" ").length} words, {text.length} characters</p> 
          <p>{0.008*text.split(" ").length} Minutes Read</p>  
          <h2>Preview</h2>
          <p>{text}</p>
      </div>
    </>
  );
}
