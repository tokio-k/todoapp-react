

export const ADD_TODO = 'ADD_TODO';
export const addTodoAction = (todoState) => {
    return {
        type: 'ADD_TODO',
        payload: {
            id: new Date().getTime().toString(16)  + Math.floor(1000*Math.random()).toString(16),
            title: todoState.title,
            isComplete:false,
        }
    }
}

export const DELETE_TODO = 'DELETE_TODO';
export const deleteTodoAction = (id) =>{
    return {
        type: 'DELETE_TODO',
        payload:id
    }
}

export const COMPLETE_TODO = 'COMPLETE_TODO';
export const completeTodoAction = (id, isComplete) => {
    return {
        type: 'COMPLETE_TODO',
        payload:{
            id: id,
            isComplete: isComplete
        }
    }
}