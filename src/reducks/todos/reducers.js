import * as Actions from './actions';
import initialState from '../store/initialState';

export const TodoListReducer = (state = initialState.todoList, action) => {
    switch (action.type) {
        case Actions.ADD_TODO:
            return {
                todoList: [...state, ...action.payload],
            };
        default:
            return state
    }
}