import classes from "./TodoActiveTask.module.css";
import { MdDelete } from "react-icons/md";
const CompleteTodoTask = (props) => {
  const dateObject = new Date(props.date);

  const formattedDate = dateObject.toLocaleString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric"
    // hour: "numeric",
    // minute: "numeric",
    // hour12: true,
  });
  
  return (
    <div className={classes.container}>
      <div className={classes.list}>
        <span className={classes.taskText}>{props.tsk}</span>
        <span className={classes.taskDate}>{formattedDate}</span>
        <button className={classes.delbtn}><MdDelete /></button>
      </div>
    </div>
  );
};

export default CompleteTodoTask;
