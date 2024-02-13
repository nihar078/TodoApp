import { Fragment, useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import TodoActiveTask from "./TodoActiveTask";

const TodoList = (props) => {
  return (
    <Fragment>
      <h1>Active Task</h1>
      {props.tasks.map((todo) => (
        <TodoActiveTask
          key={todo.id}
          tsk={todo.todo}
          id={todo.id}
          date={todo.date}
          isCompleted={todo.isCompleted}
        />
      ))}
      <AddTodo />
    </Fragment>
  );
};

export default TodoList;
