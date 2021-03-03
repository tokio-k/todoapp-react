import * as Actions from './actions';
import initialState from '../store/initialState';

export const TodosReducer = (state = initialState.todos, action) => {
    switch (action.type) {
        case Actions.ADD_TODO:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}