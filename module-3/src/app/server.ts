import app from "./app";

let server;
const port = 5000;

const newServer = async () => {
  server = app.listen(port, () => {
    console.log(`Server is Running On ${port}`);
  });
};

newServer();
