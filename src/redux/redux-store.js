import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import usersReducer from "./users-reducer";
import headerReducer from "./header-reducer";
import thunkMW from 'redux-thunk';

const reducers = combineReducers({
    userProfilePage: profileReducer,
    userDialogsPage: dialogReducer,
    usersPage: usersReducer,
    header: headerReducer,
})

const store = createStore(reducers, applyMiddleware(thunkMW));

export default store;