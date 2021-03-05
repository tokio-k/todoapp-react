import React from "react";

const Todo = (props) => {
  return <div key={props.index}>{props.title}</div>;
};

export default Todo;
