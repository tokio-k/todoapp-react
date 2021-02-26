export const addTodo = (todo) => {
    return {
        type: 'ADD_TODO',
        payload: { todo: todo}
    };
}

export const deleteTodo = (id) => {
    return {
        type: 'DELETE_TODO',
        payload: { id: id}
    }
}