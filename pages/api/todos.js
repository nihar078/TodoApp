import { MongoClient } from "mongodb";
import { ObjectId } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://nihar078:qnsD5DBWbttSpBWF@cluster1.el8weux.mongodb.net/todos?retryWrites=true&w=majority"
    );
    const db = client.db();

    const todosCollection = db.collection("todos");

    const result = await todosCollection.insertOne(data);

    console.log(result);
    client.close();
    res.status(201).json({ message: "New Todo inserted!" });
  } else if (req.method === "PUT") {
    // const { _id} = req.body;
    const { id, updatedTodo } = req.body;
    console.log(updatedTodo);

    const client = await MongoClient.connect(
      "mongodb+srv://nihar078:qnsD5DBWbttSpBWF@cluster1.el8weux.mongodb.net/todos?retryWrites=true&w=majority"
    );
    const db = client.db();
    const todosCollection = db.collection("todos");

    const result = await todosCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: updatedTodo }
    );

    console.log(result);
    client.close();
    res.status(200).json({ message: "Todo updated!" });
  }
}

export default handler;
