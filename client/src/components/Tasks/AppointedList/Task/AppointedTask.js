import React from "react";
import { useState } from "react";

import { deleteTask,updateTodo } from "../../../../actions/tasks";
import 'font-awesome/css/font-awesome.min.css';
import { useDispatch } from "react-redux";
import '../../task.css';

const Task = ({ todo }) => {

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
                <i className="fas fa-trash"/>
            </span>
            <span className="icon" onClick={() => setEditing(prevState => !prevState)}>
            <i className="fas fa-trash"/>
            </span>
        </li>
    )
}

export default Task;