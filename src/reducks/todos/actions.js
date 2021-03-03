export const ADD_TODO = 'ADD_TODO';
export const addTodoAction = (todoState) => {
    return {
        type: 'ADD_TODO',
        payload: {
            id: todoState.id,
            title: todoState.title,
            isFinish:false,
            detail: todoState.detail,
            timeLimit :todoState.timeLimit
        }
    }
}