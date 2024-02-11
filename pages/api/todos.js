import { MongoClient } from "mongodb";

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
  }
}

export default handler;
