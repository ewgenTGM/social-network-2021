const FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    SET_USERS = 'SET_USERS',
    SET_PAGE_COUNT = 'SET_PAGE_COUNT',
    SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
    SET_USERS_PER_PAGE = 'SET_USERS_PER_PAGE',
    SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT',
    SET_IS_FETCHING = 'SET_IS_FETCHING';


// Action creators

export const followAC = id => ({type: FOLLOW, payload: id}),
    unfollowAC = id => ({type: UNFOLLOW, payload: id}),
    setUsersAC = users => ({type: SET_USERS, payload: users}),
    setPageCountAC = pageCount => ({type: SET_PAGE_COUNT, payload: pageCount}),
    setCurrentPageAC = pageNumber => ({type: SET_CURRENT_PAGE, payload: pageNumber}),
    setUsersPerPageAC = usersCount => ({type: SET_USERS_PER_PAGE, payload: usersCount}),
    setTotalUsersCountAC = totalUsersCount => ({type: SET_TOTAL_USERS_COUNT, payload: totalUsersCount}),
    setIsFetchingAC = isFetching => ({type: SET_IS_FETCHING, payload: isFetching});


const initialState = {

    users: [

    ],
    pageCount: 0,
    currentPage: 0,
    usersPerPage: 10,
    totalUsersCount: 0,
    isFetching: false
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: [...action.payload]
            }

        case FOLLOW:
            return {
                ...state,
                followed: true
            }
        case UNFOLLOW:
            return {
                ...state,
                followed: false
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
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload
            }
        default:
            return state;
    }
}

export default usersReducer;