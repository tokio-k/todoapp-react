import {createSelector} from 'reselect';

const todoListSelector = (state) => state.todoList;

export const getTodoList = createSelector(
    [todoListSelector],
    state => state.todoList
)