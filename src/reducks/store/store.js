import {
    createStore as reduxCreateStore,
    combineReducers,
} from 'redux';

import { TodosReducer } from '../todos/reducers';

export default function createStore() {
    return reduxCreateStore(
        combineReducers({
            todos: TodosReducer
        })
    )
}