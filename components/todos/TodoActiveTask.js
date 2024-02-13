import { useRouter } from "next/router";
import classes from "./TodoActiveTask.module.css";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const TodoActiveTask = (props) => {
  const router = useRouter();
  const dateObject = new Date(props.date);

  const formattedDate = dateObject.toLocaleString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
    // hour: "numeric",
    // minute: "numeric",
    // hour12: true,
  });

  const completeTaskHandler = async (data) => {
    console.log(data);
    console.log(data.id);
    const updatedTodo = {
      todo: data.tsk,
      date: data.date,
      isCompleted: true,
    };
    console.log(updatedTodo);
    await fetch("/api/todos/", {
      method: "PUT",
      body: JSON.stringify({ id: data.id, updatedTodo: updatedTodo }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    router.push("/");
  };

  const deleteTodoHandler = async(id)=>{
    await fetch("/api/todos/", {
      method: "DELETE",
      body: JSON.stringify(id),
      headers: {
        "Content-Type" : "application/json"
      }
    })
    router.push("/")
  }

  return (
    <div className={classes.container}>
        <div className={classes.list}>
          <button
            className={classes.compbtn}
            onClick={() => completeTaskHandler(props)}
            disabled={props.isCompleted}
          >
            <MdOutlineRadioButtonUnchecked />
          </button>
          <span >{props.tsk}</span>
          <span >{formattedDate}</span>
          <button className={classes.delbtn} onClick={()=>deleteTodoHandler(props.id)}>
            <MdDelete />
          </button>
        </div>
    </div>
  );
};

export default TodoActiveTask;
