// import AddTodo from "@/components/todos/AddTodo";
import TodoList from "@/components/todos/Todolist";
import { Fragment } from "react";

function HomePage() {
  return (
    <Fragment>
      <h1>Home Page</h1>
      <TodoList />
      {/* <AddTodo /> */}
    </Fragment>
  );
}

export default HomePage;
