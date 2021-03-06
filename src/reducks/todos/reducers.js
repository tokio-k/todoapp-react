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
                todoList: state.todoList.filter((todo) => todo.id !== action.payload)
            }
        case Actions.COMPLETE_TODO:
            return {
                todoList: state.todoList.map((todo) => {
                    if(todo.id !== action.payload.id) return todo;
                    return {
                        ...todo,
                        isComplete: ! action.payload.isComplete
                    }
                })
            }
        default:
            return state
    }
}