const initialState = {
    todoList: []
}

export const todoReducer = (state = initialState, action) => {
    const newState = Object.assign({}, state);
    switch (action.type) {
        case 'ADD_TODO':
            const todo = action.payload.todo;
            newState.todoList.push(todo);
            return newState;
        case 'DELETE_TODO':
            const id = action.payload.id;
            newState.todoList.splice(id,1);
            return newState;
        default:
            return state;
    }
};