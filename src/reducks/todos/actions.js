export const ADD_TODO = 'ADD_TODO';
export const addTodoAction = (todoState) => {
    return {
        type: 'ADD_TODO',
        payload: {
            title: todoState.title,
            isFinish:false,
        }
    }
}