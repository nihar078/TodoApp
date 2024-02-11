import { Fragment, useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import TodoActiveTask from "./TodoActiveTask";
import CompleteTodoTask from "./CompleteTodo";

const TodoList = (props) => {
  //   const [tasks, setTasks] = useState([]);
  //   const [compeleteTasks, setCompeleteTasks] = useState([]);

  //   const addTaskHandler = (todo) => {
  //     // const newTask = {
  //     //   ...todo,
  //     //   id: Math.random().toString(),
  //     // };
  //     setTasks((prevTasks) => [...prevTasks, todo]);
  //   };

  //   const compeletedTaskHandler = (taskId) => {
  //     const cmpltTask = tasks.find((task) => task.id === taskId);
  //     setCompeleteTasks((prevCmpTsk) => [...prevCmpTsk, cmpltTask]);
  //     setTasks((prevTsk) => prevTsk.filter((tsk) => tsk.id !== taskId));
  //   };
//   console.log(props)
  return (
    <Fragment>
      <h1>list</h1>
      {props.tasks.map((todo) => (
        <TodoActiveTask
          key={todo.id}
          tsk={todo.todo}
          id={todo.id}
          date={todo.date}
        //   cmpltTsk = {(id)=> compeletedTaskHandler(todo.id)} 
        />
      ))}
      {/* {compeleteTasks.map((todo) => (
        <CompleteTodoTask
          key={todo.id}
          tsk={todo.todo}
          id={todo.id}
          date={todo.date}
        />
      ))} */}
      <AddTodo />
    </Fragment>
  );
};

export default TodoList;
