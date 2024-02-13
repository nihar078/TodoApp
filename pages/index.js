// import AddTodo from "@/components/todos/AddTodo";
import TodoList from "@/components/todos/Todolist";
import { MongoClient } from "mongodb";
import { Fragment } from "react";

function HomePage(props) {
//   const addNewTodoHandler = async (newTodo) => {
//     const response = await fetch("/api/todos", {
//       method: "POST",
//       body: JSON.stringify(newTodo),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     const data = await response.json();
//     // props.onAddTodo(newTodo);
//     console.log("Adding todo", data);
//   };
console.log(props)
  return (
    <Fragment>
      {/* <h1>Home Page</h1> */}
      {/* <TodoList tasks={props.todos}/> */}
      
      <TodoList tasks = {props.todos.filter(todo => !todo.isCompleted)}/>
      {/* <AddTodo onAddTodo={addNewTodoHandler} /> */}
    </Fragment>
  );
}

export async function getStaticProps() {
  // fetch data from an API
  const client = await MongoClient.connect(
    "mongodb+srv://nihar078:qnsD5DBWbttSpBWF@cluster1.el8weux.mongodb.net/todos?retryWrites=true&w=majority"
  );
  const db = client.db();

  const todosCollection = db.collection("todos");

  const todosData = await todosCollection.find().toArray();

//   console.log(todosData)

  client.close();

  return {
    props: {
      todos: todosData.map((todo) => ({
        todo: todo.todo,
        date: todo.date,
        id: todo._id.toString(),
        isCompleted:todo.isCompleted
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;
