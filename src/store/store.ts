import {combineReducers, createStore} from 'redux';
import {loginReducer} from './reducers/loginReducer';

const rootReducer = combineReducers({
    login: loginReducer,
    // profile: profileReducer,
    // registration: registrationReducer,
    // password: passwordReducer,
    // recovery: recoveryReducer,
})

export const store = createStore(rootReducer)

//@ts-ignore
window.store = store;