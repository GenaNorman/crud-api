const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.get("/", (req, res) => {
  res.send("hello from node api");
});









      



mongoose
  .connect(
    "mongodb+srv://normankamando:FnDIewaheCdu18LD@backend-crud.dop8y.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Backend-crud"
  )
  .then(() => {
    console.log("connected to the databse");
    app.listen(3000, () => {
      console.log("server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("connection failed");
  });
