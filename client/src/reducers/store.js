import { combineReducers,createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'


import {tasksReducer} from './tasksReducer';
import {authReducer} from './authReducer';
import {tabReducer} from './tabReducer';

const reducer = combineReducers({
    todos: tasksReducer,
    currentTab: tabReducer,authReducer
});

const middleware=[thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;