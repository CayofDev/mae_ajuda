import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority";

export default async function handler(req, res) {
  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = client.db("<database>");

  if (req.method === "POST") {
    const { name, email, password } = req.body;
    const existingUser = await db.collection("users").findOne({ email });

    if (existingUser) {
      res.status(409).json({ message: "User already exists" });
    } else {
      const result = await db
        .collection("users")
        .insertOne({ name, email, password });
      res
        .status(201)
        .json({ message: "User created successfully", user: result.ops[0] });
    }
  }

  client.close();
}
