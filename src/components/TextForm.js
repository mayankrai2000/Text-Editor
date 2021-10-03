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

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter text here");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick={handleUpClick}>
          Convert to Upper Case
        </button>
        <button className="btn btn-primary" onClick={handleLowClick}>
          Convert to Lower Case
        </button>
      </div>
      <div className="container my-3">
          <h1>Your text summary</h1>
          <p>{text.split(" ").length} words, {text.length} characters</p>
          <p>{0.008*text.split(" ").length} Minutes Read</p>
          <h2>Preview</h2>
          <p>{text}</p>
      </div>
    </>
  );
}
