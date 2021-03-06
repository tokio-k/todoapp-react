import React from "react";
import { Todo } from "./index";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todoList = useSelector((state) => state.todoList.todoList);

  console.log("console.log(todoList) with TodoList.jsx");
  console.log(todoList);
  return (
    <div>
      <h2>タスク一覧</h2>
      {todoList
        .filter((todo) => todo.isComplete === false)
        .map((todo, index) => {
          return (
            <Todo
              title={todo.title}
              key={index.toString()}
              id={todo.id}
              isComplete={false}
            />
          );
        })}
      <h3>完了済み</h3>
      {todoList
        .filter((todo) => todo.isComplete === true)
        .map((todo, index) => {
          return (
            <Todo
              title={todo.title}
              key={index.toString()}
              id={todo.id}
              isComplete={true}
            />
          );
        })}
    </div>
  );
};

export default TodoList;
