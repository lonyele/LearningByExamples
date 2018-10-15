import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";

const What = styled.h2`
  color: green;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <What>asdafd</What>
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
}

export default App;
