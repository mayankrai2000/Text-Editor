import React, {useState} from 'react';
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  // whether dark mode is enabled or not
  const [mode, setMode] = useState('light');
  return (
    <>
      <Navbar title="Text Editor" mode={mode}/>
      <div className="container my-3">
          <TextForm heading="Enter your text to analyze below"/>
          {/* <About /> */}
      </div>
    </>
  );
}

export default App;

 