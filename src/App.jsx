import "./App.css";
import { TodoList } from "./components/index";
import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { addTodoAction } from "./reducks/todos/actions";

const App = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const inputTitle = useCallback(
    (e) => {
      setTitle(e.target.value);
    },
    [setTitle]
  );

  return (
    <div className="container">
      <input value={title} type={"text"} rows={1} onChange={inputTitle} />
      <button
        onClick={() => {
          dispatch(addTodoAction({ title: title, isFinish: false }));
        }}
      >
        追加
      </button>
      <TodoList />
    </div>
  );
};

export default App;
