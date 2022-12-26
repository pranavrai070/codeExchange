import { FETCH_ALL, CREATE, UPDATE, DELETE ,TOGGLE_ACTIVE,TOGGLE_PENDING,TOGGLE_DONE} from '../constants/actionTypes';

export const tasksReducer= (todos = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...todos, action.payload];
    case UPDATE:
      return todos.map((todo) => (todo._id === action.payload._id ? action.payload:todo));

      case TOGGLE_DONE:
            return todos.map(todo => (
                todo._id === action.payload._id ? { ...todo, done: !todo.done } : todo
            ))
      case TOGGLE_ACTIVE:
            return todos.map(todo => (
                todo._id === action.payload._id ? { ...todo, active: !todo.active } : todo
            ))
      case TOGGLE_PENDING:
            return todos.map(todo => (
                todo._id === action.payload._id ? { ...todo, pending: !todo.pending } : todo
            ));
    case DELETE:
      return todos.filter((todo) => todo._id !== action.payload);
    default:
      return todos;
  }
};

