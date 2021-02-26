const initialState = {
    todoList: []
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            const todo = action.payload.todo;
            const newState = Object.assign({}, state);
            newState.todoList.push(todo);
            return newState;
        default:
            return state;
    }
};