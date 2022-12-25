import * as actionTypes from '../constants/actionTypes';


export const tabReducer = (state = actionTypes.PENDING_TODOS, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_TAB:
            return action.selected
        default: 
            return state;
    }
}