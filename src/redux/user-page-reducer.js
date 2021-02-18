/*
import userAPI from "../DAL/api";

const SET_USER_INFO = 'SET_USER_INFO', SET_IS_FETCHING = 'SET_IS_FETCHING';

export const setUserInfoAC = userInfo => ({type: SET_USER_INFO, payload: userInfo}),
    setIsFetchingAC = isFetching => ({type: SET_IS_FETCHING, payload: isFetching});

export const setUserInfo = id => {
    return dispatch => {
        dispatch(setIsFetchingAC(true));
        userAPI.getUserInfoById(id).then(response => {
            dispatch(setUserInfoAC(response.data));
            dispatch(setIsFetchingAC(false));
        })
    }
}


const initialState = {
    userInfo: {
        aboutMe: null,
        contacts: {
            facebook: null,
            website: null,
            vk: null,
            twitter: null,
            instagram: null,
            youtube: null,
            github: null,
            mainLink: null
        },
        lookingForAJob: false,
        lookingForAJobDescription: null,
        fullName: '',
        userId: null,
        photos: {
            small: null,
            large: null
        }
    },
    isFetching: false
}

const userPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_INFO:
            return {
                ...state,
                userInfo: action.payload
            }
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload
            }
        default:
            return state
    }
}

export default userPageReducer;*/
