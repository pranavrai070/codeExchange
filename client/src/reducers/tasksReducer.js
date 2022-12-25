import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

export const tasksReducer= (todos = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...todos, action.payload];
    case UPDATE:
      return todos.map((post) => (post._id === action.payload._id ? action.payload : post));
    case DELETE:
      return todos.filter((post) => post._id !== action.payload);
    default:
      return todos;
  }
};

