import {createSelector} from 'reselect';

const todosSelector = (state) => state.todos;

export const getTodoTitle = createSelector(
    [todosSelector],
    state => state.title
)