import {
    createStore as reduxCreateStore,
    combineReducers,
} from 'redux';

import { TodoListReducer } from '../todos/reducers';

export default function createStore() {
    return reduxCreateStore(
        combineReducers({
            todoList: TodoListReducer
        })
    )
}