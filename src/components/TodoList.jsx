import React from "react";

const TodoList = (props) => {
  return (
    <List>
      <Todo title={props.title} />
    </List>
  );
};

export default TodoList;
