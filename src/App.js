import React from "react";
import ExampleComponent from "hrl";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ExampleComponent text="hello world" />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
