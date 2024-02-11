import { useRef, useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
// import { RiAddLine } from "react-icons/ri";
import classes from "./AddToda.module.css";
import { useRouter } from "next/router";

const AddTodo = (props) => {
  const todoRef = useRef();
  const router = useRouter()
  const [isAddTodo, setIsAddTodo] = useState(false);

  const startAddTodo = () => {
    setIsAddTodo(true);
  };
  const closeAddTodo = () => {
    setIsAddTodo(false);
  };
  const todoFormSubmitHandler = async(event) => {
    event.preventDefault();
    const newTodo = {
      todo: todoRef.current.value,
      date: new Date().toISOString(),
    };
    const response = await fetch("/api/todos", {
        method: "POST",
        body: JSON.stringify(newTodo),
        headers: {
            "Content-Type" : "application/json"
        }
    })
    const data = await response.json()
    // props.onAddTodo(newTodo);
    // // console.log("Adding todo", newTodo);
    console.log("Adding todo", data);
    router.push("/")

    todoRef.current.value = "";
    setIsAddTodo(false);
  };
  return (
    // <div>
    //   <p3>AddTodo</p3>
    <div>
      {isAddTodo && (
        <form className={classes.todoInput} onSubmit={todoFormSubmitHandler}>
          <input
            type="text"
            placeholder="Task name..."
            ref={todoRef}
            className={classes.input}
          />
          <button className={classes.addButton}>Add task</button>
          <button className={classes.cancelButton} onClick={closeAddTodo}>
            Cancel
          </button>
        </form>
      )}
      {!isAddTodo && (
        <button onClick={startAddTodo} className={classes.btn}>
          {/* <RiAddLine /> */}
          <IoIosAddCircle className={classes.ad} />
          {"Add task"}
        </button>
      )}
    </div>
    // </div>
  );
};
export default AddTodo;
