import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import usersReducer from "./users-reducer";

const reducers = combineReducers({
    userProfilePage: profileReducer,
    userDialogsPage: dialogReducer,
    usersPage: usersReducer
})

const store = createStore(reducers);

export default store;