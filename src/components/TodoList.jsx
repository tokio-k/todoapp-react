import React from "react";
import { Todo } from "./index";
import { useSelector, useDispatch } from "react-redux";

const TodoList = () => {
  const todoList = useSelector((state) => state.todoList);

  return (
    <div>
      {todoList.map((todo, index) => {
        return <Todo title={todo.title} key={index.toString()} />;
      })}
    </div>
  );
};

export default TodoList;
