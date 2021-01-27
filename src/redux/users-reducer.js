const FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    SET_USERS = 'SET_USERS',
    SET_PAGE_COUNT = 'SET_PAGE_COUNT',
    SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
    SET_USERS_PER_PAGE = 'SET_USERS_PER_PAGE',
    SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';


// Action creators

export const followAC = id => ({type: FOLLOW, payload: id});
export const unfollowAC = id => ({type: UNFOLLOW, payload: id});
export const setUsersAC = users => ({type: SET_USERS, payload: users});
export const setPageCountAC = pageCount => ({type: SET_PAGE_COUNT, payload: pageCount});
export const setCurrentPageAC = pageNumber => ({type: SET_CURRENT_PAGE, payload: pageNumber});
export const setUsersPerPageAC = usersCount => ({type: SET_USERS_PER_PAGE, payload: usersCount});
export const setTotalUsersCountAC = totalUsersCount => ({type: SET_TOTAL_USERS_COUNT, payload: totalUsersCount});


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
    ],
    pageCount: 0,
    currentPage: 0,
    usersPerPage: 10,
    totalUsersCount: 0
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
        case SET_PAGE_COUNT:
            return {
                ...state,
                pageCount: action.payload
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }
        case SET_USERS_PER_PAGE:
            return {
                ...state,
                usersPerPage: action.payload
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.payload
            }
        default:
            return state;
    }
}

export default usersReducer;