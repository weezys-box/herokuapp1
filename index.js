const express = require("express");

const server = express();
const port = 3000;

server.get("/", (req, res) => {
  res.send({
    name: "mohammed",
    age: 34,
  });
});

server.listen(port, () => {
  console.log("listening on port:" + port);
});
