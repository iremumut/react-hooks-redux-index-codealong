import React from "react";
import {useSelector} from "react-redux";
import Todo from "./Todo";

function TodoContainer() {

  const toDos = useSelector((state) => state.todos.entities);

  return (
    <ul>
      <div>TodoContainer</div>
      {toDos.map((toDo) => {
        return <Todo text={toDo} key={toDo}></Todo>
      })}

      </ul>
  );
}

export default TodoContainer;
