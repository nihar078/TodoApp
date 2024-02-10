import { Fragment, useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import TodoActiveTask from "./TodoActiveTask";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [compeleteTasks, setCompeleteTasks] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTaskHandler = (todo) => {
    const newTask = {
      ...todo,
      id: Math.random().toString(),
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const compeletedTaskHandler = (taskId) => {
    console.log("succes")
    const cmpltTask = tasks.find((task) => task.id === taskId);
    setCompeleteTasks((prevCmpTsk) => [...prevCmpTsk, cmpltTask]);
    setTasks((prevTsk) => prevTsk.filter((tsk) => tsk.id !== taskId));
  };
  return (
    <Fragment>
      <h1>list</h1>
      {tasks.map((todo) => (
        <TodoActiveTask
          key={todo.id}
          tsk={todo.todo}
          id={todo.id}
          date={todo.date}
          cmpltTsk = {(id)=> compeletedTaskHandler(todo.id)} 
        />
      ))}
      {compeleteTasks.map((todo) => (
        <TodoActiveTask
          key={todo.id}
          tsk={todo.todo}
          id={todo.id}
          date={todo.date}
        />
      ))}
      <AddTodo onAddTodo={addTaskHandler} />
    </Fragment>
  );
};

export default TodoList;
