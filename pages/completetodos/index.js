// pages/completetodos.js
import CompleteTodoTask from "@/components/todos/CompleteTodo";
import { MongoClient } from "mongodb";
import { Fragment } from "react";

const CompleteTodosPage = (props) => {
  return (
    <Fragment>
      <h1>Completed Todos</h1>
      {props.completedTodos.map((todo) => (
        <CompleteTodoTask
          key={todo.id}
          tsk={todo.todo}
          date={todo.date}
        />
      ))}
    </Fragment>
  );
};

export async function getStaticProps() {
  // Fetch completed todos from the database
  const client = await MongoClient.connect(
    "mongodb+srv://nihar078:qnsD5DBWbttSpBWF@cluster1.el8weux.mongodb.net/todos?retryWrites=true&w=majority"
  );
  const db = client.db();
  const todosCollection = db.collection("todos");
  const completedTodos = await todosCollection.find({ isCompleted: true }).toArray();
  client.close();

  return {
    props: {
      completedTodos: completedTodos.map((todo) => ({
        todo: todo.todo,
        date: todo.date,
        id: todo._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default CompleteTodosPage;
