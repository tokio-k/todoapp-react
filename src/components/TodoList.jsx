import React from "react";
import { Todo } from "./index";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todoList = useSelector((state) => state.todoList.todoList);

  console.log("console.log(todoList) with TodoList.jsx");
  console.log(todoList);
  return (
    <div>
      {todoList.map((todo, index) => {
        return <Todo title={todo.title} key={index.toString()} id={todo.id} />;
      })}
    </div>
  );
};

export default TodoList;
