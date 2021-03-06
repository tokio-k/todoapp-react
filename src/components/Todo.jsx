import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodoAction } from "../reducks/todos/actions";

const Todo = (props) => {
  const dispatch = useDispatch();

  console.log(props);
  return (
    <div key={props.index}>
      {props.title}
      <button
        onClick={() => {
          dispatch(deleteTodoAction(props.id));
        }}
      >
        削除
      </button>
    </div>
  );
};

export default Todo;
