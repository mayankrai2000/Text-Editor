import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case", "success")
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case", "success")
  };

  const handleClear = () => {
      setText("");
      props.showAlert("Cleared Text", "success")
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
     var text = document.getElementById("myBox");
     text.select();
     navigator.clipboard.writeText(text.value);
     props.showAlert("Text copied to clipboard", "success")
  }

  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style={{color: props.textColour}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className={`form-control text-${props.mode === 'dark'?'light':'dark'}`}
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor: props.mode === 'dark'?'gray':'white'}}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-3 my-1" onClick={handleUpClick}>
          Convert to Upper Case
        </button>
        <button className="btn btn-primary mx-3 my-1" onClick={handleLowClick}>
          Convert to Lower Case
        </button>
        <button className="btn btn-primary mx-3 my-1" onClick={handleClear}>
          Clear
        </button>
        <button className="btn btn-primary mx-3 my-1" onClick={handleCopy}>
          Copy
        </button>
      </div>
      <div className="container my-3" style={{color: props.textColour}}>
          <h2>Your text summary</h2>
          <p>{text.split(" ").filter((element)=>{return element.length !== 0}).length} words, {text.length} characters</p> 
          <p>{0.008*text.split(" ").length} Minutes Read</p>  
          <h2>Preview</h2>
          <p>{text.length>0?text:"Enter something in text box to preview here"}</p>
      </div>
    </>
  );
}
