import * as Actions from './actions';
import initialState from '../store/initialState';

export const TodoListReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.ADD_TODO:
            console.log('console.log(initialState); with reducers')
            console.log(initialState);
            console.log('console.log(state);with reducers')
            console.log(state);
            return {
                todoList: [...state.todoList,action.payload]
            };
        default:
            return state
    }
}