import React from "react";
import { Header, List, Title } from "./components/Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header>
        <Title />
        <List />
      </Header>
    </div>
  );
}

export default App;
