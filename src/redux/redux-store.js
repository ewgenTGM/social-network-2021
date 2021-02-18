import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import usersReducer from "./users-reducer";
import headerReducer from "./header-reducer";
import thunkMW from 'redux-thunk';
import userPageReducer from "./user-page-reducer";
import authReducer from "./auth-reducer";
import { profileReducerTs } from "./redux-ts/profile-reducer-ts";

const reducers = combineReducers( {
    userProfilePage: profileReducerTs,
    userDialogsPage: dialogReducer,
    usersPage: usersReducer,
    header: headerReducer,
    userPage: userPageReducer,
    auth: authReducer
} )

const store = createStore( reducers, applyMiddleware( thunkMW ) );

export default store;