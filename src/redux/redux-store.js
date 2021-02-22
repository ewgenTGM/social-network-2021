import { applyMiddleware, combineReducers, createStore } from "redux";
import { usersReducerTs } from "./redux-ts/users-reducer";
import thunkMW from 'redux-thunk';
import { profileReducerTs } from "./redux-ts/profile-reducer-ts";
import { dialogReducerTs } from "./redux-ts/dialog-reducer-ts";
import { userPageReducerTs } from "./redux-ts/user-page-reducer-ts";
import { authReducerTs } from "./redux-ts/auth-reducer-ts";
import { headerReducerTs } from "./header-reducer";

const reducers = combineReducers( {
    userProfilePage: profileReducerTs,
    userDialogsPage: dialogReducerTs,
    usersPage: usersReducerTs,
    header: headerReducerTs,
    userPage: userPageReducerTs,
    auth: authReducerTs
} )

export const store = createStore( reducers, applyMiddleware( thunkMW ) );