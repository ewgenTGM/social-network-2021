const FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    SET_USERS = 'SET_USERS';

export const followAC = id => ({type: FOLLOW, payload: id});

export const unfollowAC = id => ({type: UNFOLLOW, payload: id});

export const setUsersAC = users => ({type: SET_USERS, payload: users});

const initialState = {

    users: [
        {
            name: 'Марина',
            id: 11,
            photos: {
                small: null,
                large: null,
            },
            status:
                'Идейные соображения высшего порядка, а также дальнейшее развитие различных форм деятельности.',
            followed: true,

        },
        {
            name: 'Иван',
            id: 22,
            photos: {
                small: null,
                large: null,
            },
            status:
                'Повседневная практика показывает, что постоянный количественный рост и сфера нашей активности!',
            followed: true,
        }
    ]
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USERS: {
            return {
                ...state,
                users: [...action.payload]
            }
        }
        case FOLLOW:
            return {
                ...state,
                followed: true
            }
        case UNFOLLOW: {
            return {
                ...state,
                followed: false
            }
        }
        default:
            return state;
    }
}

export default usersReducer;