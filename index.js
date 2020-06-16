const express = require("express");

const server = express();
const port = 3000;

server.use(express.static("public/"));

server.use(express.json());

server.get("/", (req, res) => {
  res.send({
    name: "mohammed",
    age: 34,
  });
});

server.get("/name", (req, res) => {
  console.log(req.body);
});

server.listen(port, () => {
  console.log("listening on port:" + port);
});
