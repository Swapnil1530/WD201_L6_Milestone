const express = require("express");
const app = express();
// const { Todo } = require("./models");
const path = require("path");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// app.get("/", function (request, response) {
//   response.send("Hello World");
// });
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
})
// app.use(express.static(path.join(__dirname, '/public')));
// app.get("/todos", async function (_request, response) {
//   console.log("Processing list of all Todos ...");
//   // FILL IN YOUR CODE HERE
//   try {
//     const allTodo = await Todo.findAll();
//     return response.status(200).json(allTodo);
//   } catch (err) {
//     console.log(err);
//     return response.status(422).json(err);
//   }
//   // First, we have to query our PostgerSQL database using Sequelize to get list of all Todos.
//   // Then, we have to respond with all Todos, like:
//   // response.send(todos)
// });

// app.get("/todos/:id", async function (request, response) {
//   try {
//     const todo = await Todo.findByPk(request.params.id);
//     return response.status(200).json(todo);
//   } catch (error) {
//     console.log(error);
//     return response.status(422).json(error);
//   }
// });

// app.post("/todos", async function (request, response) {
//   try {
//     const todo = await Todo.addTodo(request.body);
//     return response.status(200).json(todo);
//   } catch (error) {
//     console.log(error);
//     return response.status(422).json(error);
//   }
// });

// app.put("/todos/:id/markAsCompleted", async function (request, response) {
//   const todo = await Todo.findByPk(request.params.id);
//   try {
//     const updatedTodo = await todo.markAsCompleted();
//     return response.json(updatedTodo);
//   } catch (error) {
//     console.log(error);
//     return response.status(422).json(error);
//   }
// });

// app.delete("/todos/:id", async function (request, response) {
//   console.log("We have to delete a Todo with ID: ", request.params.id);
//   // FILL IN YOUR CODE HERE
//   try {
//     const todoDelete = await Todo.destroy({
//       where: {
//         id: request.params.id,
//       },
//     });
//     response.status(200).send((todoDelete) ? true : false);
//   } catch (err) {
//     console.log(err);
//     return response.status(422).json(err);
//   }
// First, we have to query our database to delete a Todo by ID.
// Then, we have to respond back with true/false based on whether the Todo was deleted or not.
// response.send(true)
// });

module.exports = app;
