const express = require('express');
const cors = require('cors');

const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(cors());
app.use(express.json());

const users = [];

function checksExistsUserAccount(request, response, next) {
  const { username } = request.headers;

  const user = users.find((user) => user.username === username);

  if(!user)
    return response.status(400).json({ error: 'This user does not exists' });

  request.user = user;

  return next();
}

function checksIfTodoExists(request, response, next) {
  const { id } = request.params;
  const { todos } = request.user;

  const findTodo = todos.find((todo) => todo.id === id);

  if(!findTodo)
    return response.status(404).json({ error: 'This TODO does not exists!' });

  request.todo = findTodo;

  return next();
}

app.post('/users', (request, response) => {
  const { username, name } = request.body;

  const userExists = users.find((user) => user.username === username);

  if(userExists)
    return response.status(400).json({ error: 'This username already exists' });

  const newUser = {
    id: uuidv4(),
    name,
    username,
    todos: []
  };

  users.push(newUser);

  return response.status(201).json(newUser);
});

app.get('/todos', checksExistsUserAccount, (request, response) => {
  const { todos } = request.user;

  return response.json(todos);
});

app.post('/todos', checksExistsUserAccount, (request, response) => {
  const { todos } = request.user;

  const { title, deadline } = request.body;

  const newTodo = {
    id: uuidv4(),
    title,
    done: false,
    deadline: new Date(deadline),
    created_at: new Date()
  }

  todos.push(newTodo);

  return response.status(201).json(newTodo);
});

app.put('/todos/:id', checksExistsUserAccount, checksIfTodoExists, (request, response) => {
  const { todo } = request;
  const { title, deadline } = request.body;

  todo.title = title;
  todo.deadline = new Date(deadline);

  return response.json(todo);
});

app.patch('/todos/:id/done', checksExistsUserAccount, checksIfTodoExists, (request, response) => {
  const { todo } = request;

  todo.done = true;

  return response.json(todo);
});

app.delete('/todos/:id', checksExistsUserAccount, checksIfTodoExists, (request, response) => {
  const { todos } = request.user;
  const { todo } = request;

  todos.splice(todo, 1);

  return response.status(204).json(todos);
});

module.exports = app;