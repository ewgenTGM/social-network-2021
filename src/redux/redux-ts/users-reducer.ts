import userAPI from '../../DAL/api';
import { UserInfoType } from './user-page-reducer-ts';
import { Dispatch } from 'redux';

const FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    SET_USERS = 'SET_USERS',
    SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
    SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT',
    SET_IS_FETCHING = 'SET_IS_FETCHING';


// Action creators

type FollowActionType = { type: typeof FOLLOW, payload: { id: string } };
type UnfollowActionType = { type: typeof UNFOLLOW, payload: { id: string } };
type SetUsersActionType = { type: typeof SET_USERS, payload: { users: Array<UserInfoType> } };
type SetCurrentPageActionType = { type: typeof SET_CURRENT_PAGE, payload: { pageNumber: number } };
type SetTotalUsersCountActionType = { type: typeof SET_TOTAL_USERS_COUNT, payload: { totalUsersCount: number } };
type SetIsFetchingActionType = { type: typeof SET_IS_FETCHING, payload: { isFetching: boolean } };

type UsersReducerActionsType =
    FollowActionType
    | UnfollowActionType
    | SetUsersActionType
    | SetCurrentPageActionType
    | SetTotalUsersCountActionType
    | SetIsFetchingActionType

export const followAC = ( id: string ): FollowActionType => ( {
  type: FOLLOW, payload: { id }
} );
export const unfollowAC = ( id: string ): UnfollowActionType => ( {
  type: UNFOLLOW, payload: { id }
} );
export const setUsersAC = ( users: Array<UserInfoType> ): SetUsersActionType => ( {
  type: SET_USERS,
  payload: { users }
} );
export const setCurrentPageAC = ( pageNumber: number ): SetCurrentPageActionType => ( {
  type: SET_CURRENT_PAGE,
  payload: { pageNumber }
} );
export const setTotalUsersCountAC = ( totalUsersCount: number ): SetTotalUsersCountActionType => ( {
  type: SET_TOTAL_USERS_COUNT,
  payload: { totalUsersCount }
} );
export const setIsFetchingAC = ( isFetching: boolean ): SetIsFetchingActionType => ( {
  type: SET_IS_FETCHING,
  payload: { isFetching }
} );

export const setUsers = ( pageNumber: number ) => {
  return ( dispatch: Dispatch<UsersReducerActionsType> ): void => {
    dispatch( setIsFetchingAC( true ) );
    userAPI.getUsers( pageNumber ).then( response => {
      dispatch( setUsersAC( response.data.items ) );
      dispatch( setTotalUsersCountAC( response.data.totalCount ) );
      dispatch( setIsFetchingAC( false ) );
    } );
  };
};

type UsersReducerStateType = {
  users: Array<UserInfoType>
  pageCount: number
  currentPage: number
  usersPerPage: number
  totalUsersCount: number
  isFetching: boolean
}

const initialState: UsersReducerStateType = {
  users: [],
  pageCount: 0,
  currentPage: 1,
  usersPerPage: 20,
  totalUsersCount: 0,
  isFetching: false
};

export const usersReducerTs = ( state: UsersReducerStateType = initialState, action: UsersReducerActionsType ): UsersReducerStateType => {

  switch ( action.type ) {
    case SET_USERS:
      return {
        ...state,
        users: [ ...action.payload.users ]
      };

    case FOLLOW:
      console.info( 'You has been follow to user with ID:', action.payload.id );
      return {
        ...state
      };
    case UNFOLLOW:
      console.info( 'You has been unfollow to user with ID:', action.payload.id );
      return {
        ...state
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload.pageNumber
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.payload.totalUsersCount
      };
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload.isFetching
      };
    default:
      return state;
  }
};