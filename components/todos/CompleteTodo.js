import { useRouter } from "next/router";
import classes from "./TodoActiveTask.module.css";
import { MdDelete } from "react-icons/md";


const CompleteTodoTask = (props) => {
const router = useRouter()
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

  const deleteHandler = async (id) => {
    await fetch("/api/todos/", {
      method: "DELETE",
      body: JSON.stringify(id),
      headers: {
        "Content-Type": "application/json",
      },
    });
    router.push("/completetodos")
  };

  return (
    <div className={classes.container}>
      <div className={classes.list}>
        <span >{props.tsk}</span>
        <span>{formattedDate}</span>
        <button className={classes.delbtn} onClick={()=>deleteHandler(props.id)}>
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default CompleteTodoTask;
