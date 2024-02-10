import { useRef, useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
// import { RiAddLine } from "react-icons/ri";
import classes from "./AddToda.module.css";

const AddTodo = (props) => {
  const todoRef = useRef();
  const [isAddTodo, setIsAddTodo] = useState(false);

  const startAddTodo = () => {
    setIsAddTodo(true);
  };
  const closeAddTodo = () => {
    setIsAddTodo(false);
  };
  const todoFormSubmitHandler = (event) => {
    event.preventDefault();
    const newTodo = {
      todo: todoRef.current.value,
      date: new Date().toISOString(),
    };
    props.onAddTodo(newTodo);
    console.log("Adding todo", newTodo);
    todoRef.current.value = ""
    setIsAddTodo(false)
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
            <IoIosAddCircle  className={classes.ad}/>
            {"Add task"}
          </button>
        )}
      </div>
    // </div>
  );
};
export default AddTodo;
