import React from "react";
import logo from "./doge.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Such automated build and release pipelines, much wow</p>
        <a
          className="App-link"
          href="https://nzmsa.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          MSA Website
        </a>
      </header>
    </div>
  );
}

export default App;
