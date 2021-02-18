import { applyMiddleware, combineReducers, createStore } from "redux";
import usersReducer from "./users-reducer";
import headerReducer from "./header-reducer";
import thunkMW from 'redux-thunk';
import userPageReducer from "./user-page-reducer";
import authReducer from "./auth-reducer";
import { profileReducerTs } from "./redux-ts/profile-reducer-ts";
import { dialogReducerTs } from "./redux-ts/dialog-reducer-ts";

const reducers = combineReducers( {
    userProfilePage: profileReducerTs,
    userDialogsPage: dialogReducerTs,
    usersPage: usersReducer,
    header: headerReducer,
    userPage: userPageReducer,
    auth: authReducer
} )

export const store = createStore( reducers, applyMiddleware( thunkMW ) );