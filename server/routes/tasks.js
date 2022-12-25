import express, { Router } from 'express';


import{ updateTodo, addTodo, getAllTodos,toggleDone,toggleActive,togglePending,deleteTodo} from '../controller/todo-controller.js';

const route = express.Router();
import auth from "../middleware/auth.js";

route.post('/addtask', addTodo);
route.get('/todos', getAllTodos);
route.get('/todos/:id', toggleDone);
route.get('/todos/:id', toggleActive);
route.get('/todos/:id', togglePending);
route.put('/todos/:id', updateTodo);
route.delete('/todos/:id', deleteTodo);

export default route;