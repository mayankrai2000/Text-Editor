import React, { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState("light");
  const [textColour, setTextColour] = useState("dark")
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  const toggleMode = (mode) => {
    if (mode === 'dark') {
      setMode(mode);
      setTextColour("light");
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "success")
    } else if (mode === 'light') {
      setMode(mode);
      setTextColour("dark");
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
    } else if (mode === 'primary') {
      setMode("primary");
      setTextColour("light");
      document.body.style.backgroundColor = 'pink';
      showAlert("Primary mode has been enabled", "success")
    }
  };
  return (
    <>
      <Navbar
        title="Text Editor"
        mode={mode}
        toggleMode={toggleMode}
        textColour={textColour}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <About />  */}
        <TextForm heading="Enter your text to analyze below" mode={mode} showAlert={showAlert}/>
      </div>
    </>
  );
}

export default App;
