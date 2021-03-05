import React, { Component } from "react";
import "./App.css";
import { TodoList } from "./components/index";

const App = () => {
  return (
    <div className="container">
      <TodoList />
    </div>
  );
};

export default App;
