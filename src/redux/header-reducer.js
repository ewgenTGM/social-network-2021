const SET_ME = 'SET_ME';

export const setMeAC = (id, login, email) => {
    return {type: SET_ME, payload: {id, login, email}}
}

const initialState = {
    me: {
        id: null,
        login: null,
        email: null,
    }
}

const headerReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_ME: {
            return {
                id: action.payload.id,
                login: action.payload.login,
                email: action.payload.email,
            }
        }

        default:
            return state;
    }
}

export default headerReducer;