import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import Connection from './database/db.js';
import taskRoutes from './routes/tasks.js';
import userRoutes from './routes/user.js';

const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/tasks', taskRoutes);
app.use('/user',userRoutes);


const PORT = 9000;

Connection();

app.listen(PORT, () => console.log(`Your server is running successfully on PORT ${PORT}`));