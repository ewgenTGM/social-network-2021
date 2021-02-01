const SET_IS_AUTH = 'SET_IS_AUTH';

export const setIsAuthAC = isAuth => ({type: SET_IS_AUTH, payload: isAuth});

const initialState = {
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_AUTH:
            return {...state, isAuth: action.payload}
        default:
            return state
    }
}

export default authReducer;