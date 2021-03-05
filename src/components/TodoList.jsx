import React from "react";
import { Todo } from "./index";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todoList = useSelector((state) => state.todoList.todoList);

  return (
    <div>
      {todoList.map((todo, index) => {
        return <Todo title={todo.title} key={index.toString()} />;
      })}
    </div>
  );
};

export default TodoList;
