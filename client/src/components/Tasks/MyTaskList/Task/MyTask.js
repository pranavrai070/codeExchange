import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { deleteTask,updateTodo,togglePending,toggleActive,toggleDone } from "../../../../actions/tasks";
import { Button } from "react-bootstrap";
import 'font-awesome/css/font-awesome.min.css';
import { useDispatch } from "react-redux";
import '../../task.css';

const MyTask = ({ todo }) => {

    const [editing, setEditing] = useState(false);
    const [text, setText] = useState(todo?.data);


    const dispatch = useDispatch();
    
    const onFormSubmit = (e) => {
        e.preventDefault();

        setEditing(prevState => !prevState);

        dispatch(updateTodo(todo._id, text))
    }

    return (
        <li className="task">

            <span style={{ display: editing ? 'none' : '' }}>{todo?.data}</span>

            <form
                style={{ display: editing ? 'inline' : 'none' }}
                onSubmit={onFormSubmit}
            >
                <input
                    type="text"
                    value={text}
                    className="edit-todo"
                    onChange={(e) => setText(e.target.value)}
                />
            </form>

            
            <span className="icon" onClick={() => dispatch(deleteTask(todo._id))}>
            <Button size="sm">Delete</Button>
            </span>
            {/* <span className="icon" onClick={() => setEditing(prevState => !prevState)}>
            <Button size="sm">E</Button>
            </span> */}

            <div className="toggleTaskBtn">
            <span className="icon" onClick={() => dispatch(togglePending(todo._id))}>
            <Button size="sm">Pending</Button>
            </span>
            <span className="icon" onClick={() => dispatch(toggleActive(todo._id))}>
            <Button size="sm">Active</Button>
            </span>
            <span className="icon" onClick={() => dispatch(toggleDone(todo._id))}>
            <Button size="sm">Done</Button>
            </span>
            </div>

        </li>
    )
}

export default MyTask;