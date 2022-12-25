import React from 'react';
import { useEffect } from 'react';

import { deleteTask, getAllTodos } from '../../actions/tasks';
import { PENDING_TODOS, DONE_TODOS, ACTIVE_TODOS } from '../../constants/actionTypes';

import { useDispatch, useSelector } from 'react-redux';


// component
import Task from './Task/Task';
import Tabs from '../Tabs/Tabs';


export const TaskList = () => {

    const dispatch = useDispatch();

    const todos = useSelector((state) => state.todos);
    const currentTab = useSelector(state => state.currentTab);

    useEffect(() => {
        dispatch(getAllTodos());
    }, [])

    const getTodos = () => {
        return todos;
    }
    console.log(todos);

    // const removeDoneTodos = () => {
    //     todos.forEach(({ done, _id }) => {
    //         if (done) {
    //             dispatch(deleteTask(_id));
    //         }
    //     })
    // }

    return (
        <article>
            <div>
                <Tabs currentTab={currentTab} />

                {/* {
                    todos.some(todo => todo.done) ? (
                        <button
                            onClick={removeDoneTodos}
                            className="button clear"
                        >Remove Done Todos</button>
                    ) : null    
                } */}
            </div>

            <ul>
                { 
                    getTodos().map(todo => (
                        <Task 
                            key={todo._id}
                            todo={todo}
                        />
                    )) 
                }
            </ul>
        </article>
    )
}

export default TaskList;