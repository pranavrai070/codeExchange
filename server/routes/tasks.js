import express, { Router } from 'express';


import{ updateTodo, addTodo, getAllTodos,toDone,toActive,toPending,deleteTodo} from '../controller/todo-controller.js';

const route = express.Router();
import auth from "../middleware/auth.js";

route.post('/addtask', addTodo);
route.get('/todos', getAllTodos);
route.put('/todos/:id', toDone);
route.put('/todos/:id', toActive);
route.put('/todos/:id', toPending);
route.put('/todos/:id', updateTodo);
route.delete('/todos/:id', deleteTodo);

export default route;