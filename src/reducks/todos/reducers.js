import * as Actions from './actions';
import initialState from '../store/initialState';

export const TodoListReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.ADD_TODO:
            return {
                todoList: [...state.todoList,action.payload]
            };
        case Actions.DELETE_TODO:
            return {
                todoList: state.todoList.filter((todo) => todo.id !== action.payload.id)
            }
        default:
            return state
    }
}