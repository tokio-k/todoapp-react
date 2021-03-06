import React from "react";
import { useDispatch } from "react-redux";
import { completeTodoAction, deleteTodoAction } from "../reducks/todos/actions";

const Todo = (props) => {
  const dispatch = useDispatch();

  return (
    <div key={props.index}>
      {props.title}
      <button
        onClick={() => {
          dispatch(completeTodoAction(props.id, props.isComplete));
        }}
      >
        {(() => {
          if (props.isComplete) {
            return "未完了";
          } else {
            return "完了";
          }
        })()}
      </button>
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
