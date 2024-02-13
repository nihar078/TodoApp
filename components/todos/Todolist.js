import { Fragment } from "react";
import AddTodo from "./AddTodo";
import TodoActiveTask from "./TodoActiveTask";

const TodoList = (props) => {
  return (
    <Fragment>
      <h1>list</h1>
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
