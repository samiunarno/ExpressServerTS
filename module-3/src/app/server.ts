import { MongoClient, ServerApiVersion } from "mongodb";
import app from "./app";
import { client } from "./config/mongodb";

let server;
const port = 5000;

const newServer = async () => {
  await client.connect();
  console.log("Successfully Connected To MongoDB");

  server = app.listen(port, async () => {
    console.log(`Server is Running On ${port}`);
  });
};

newServer();
