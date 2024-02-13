import { Fragment, useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import TodoActiveTask from "./TodoActiveTask";
// import { useRouter } from "next/navigation";
// import CompleteTodoTask from "./CompleteTodo";

const TodoList = (props) => {
  // const router = useRouter()
  //   const [tasks, setTasks] = useState([]);
  //   const [compeleteTasks, setCompeleteTasks] = useState([]);

  //   const addTaskHandler = (todo) => {
  //     // const newTask = {
  //     //   ...todo,
  //     //   id: Math.random().toString(),
  //     // };
  //     setTasks((prevTasks) => [...prevTasks, todo]);
  //   };

  // const compeletedTaskHandler = async(id) => {
  //     console.log(id)
  //     const updatedTodo = {
  //         todo: props.tasks.todo,
  //         date: new Date().toISOString(),
  //         isCompleted: true
  //       };
  //     await fetch("/api/cmplttodos", {
  //         method: "PUT",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify( updatedTodo),
  //       });
  //       router.push("/completetodos")
  // };
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
          isCompleted={todo.isCompleted}
          //   cmpltTsk = {()=> compeletedTaskHandler(todo.id)}
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
