import React from 'react';
import { useEffect } from 'react';

import { deleteTask, getAllTodos } from '../../../actions/tasks';
import { PENDING_TODOS, DONE_TODOS, ACTIVE_TODOS } from '../../../constants/actionTypes';

import { useDispatch, useSelector } from 'react-redux';


// component
import AppointedTask from './Task/AppointedTask';
import Tabs from '../../Tabs/Tabs';


export const AppointedList = () => {

    const dispatch = useDispatch();

    const todos = useSelector((state) => state.todos);
    const currentTab = useSelector(state => state.currentTab);

    useEffect(() => {
        dispatch(getAllTodos());
    }, [])

    const getTodos = () => {
        if (currentTab === PENDING_TODOS) {
            return todos.filter(todo => todo.pending)
        } else if (currentTab === ACTIVE_TODOS) {
            return todos.filter(todo => todo.active)
        } else if (currentTab === DONE_TODOS) {
            return todos.filter(todo => todo.done)
        }
    }


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
                        <AppointedTask 
                            key={todo._id}
                            todo={todo}
                        />
                    )) 
                }
            </ul>
        </article>
    )
}

export default AppointedList;