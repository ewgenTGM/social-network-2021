import { applyMiddleware, combineReducers, createStore } from "redux";
import usersReducer from "./users-reducer";
import headerReducer from "./header-reducer";
import thunkMW from 'redux-thunk';
import authReducer from "./auth-reducer";
import { profileReducerTs } from "./redux-ts/profile-reducer-ts";
import { dialogReducerTs } from "./redux-ts/dialog-reducer-ts";
import { userPageReducerTs } from "./redux-ts/user-page-reducer-ts";

const reducers = combineReducers( {
    userProfilePage: profileReducerTs,
    userDialogsPage: dialogReducerTs,
    usersPage: usersReducer,
    header: headerReducer,
    userPage: userPageReducerTs,
    auth: authReducer
} )

export const store = createStore( reducers, applyMiddleware( thunkMW ) );