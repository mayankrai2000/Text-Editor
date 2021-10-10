import React, { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  // whether dark mode is enabled or not
  const [mode, setMode] = useState("light");
  const [textMode, setTextMode] = useState("Enable Dark Mode");
  const [textColour, setTextColour] = useState("dark")

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setTextMode("Enable Light Mode");
      setTextColour("light");
    } else {
      setMode("light");
      setTextMode("Enable Dark Mode");
      setTextColour("dark");
    }
  };
  return (
    <>
      <Navbar
        title="Text Editor"
        mode={mode}
        toggleMode={toggleMode}
        textMode={textMode}
        textColour={textColour}
      />
      <div className="container my-3">
        <TextForm heading="Enter your text to analyze below" />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
