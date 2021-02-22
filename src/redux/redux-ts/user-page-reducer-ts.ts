import userAPI from '../../DAL/api';
import { Dispatch } from 'redux';

const SET_USER_INFO = 'SET_USER_INFO', SET_IS_FETCHING = 'SET_IS_FETCHING';

type SetUserInfoActionType = {
  type: typeof SET_USER_INFO
  payload: UserInfoType
}

type SetIsFetchingActionType = {
  type: typeof SET_IS_FETCHING
  payload: boolean
}

type ActionType = SetUserInfoActionType | SetIsFetchingActionType

export const setUserInfoAC = ( userInfo: UserInfoType ): ActionType => ( { type: SET_USER_INFO, payload: userInfo } );
export const setIsFetchingAC = ( isFetching: boolean ): ActionType => ( {
  type: SET_IS_FETCHING,
  payload: isFetching
} );

type DispatchType = Dispatch<ActionType>;

export const setUserInfo = ( id: string ) => {
  return ( dispatch: DispatchType ) => {
    dispatch( setIsFetchingAC( true ) );
    userAPI.getUserInfoById( id ).then( response => {
      dispatch( setUserInfoAC( response.data ) );
      dispatch( setIsFetchingAC( false ) );
    } );
  };
};

type ContactType = { [key: string]: string | null }

/*type ContactType = {
 [key: string]: string | null
 facebook: null | string
 website: null | string
 vk: null | string
 twitter: null | string
 instagram: null | string
 youtube: null | string
 github: null | string
 mainLink: null | string
 }*/

type PhotoType = {
  small: string | null
  large: string | null
}

export type UserInfoType = {
  aboutMe: string | null
  contacts: Array<ContactType>
  lookingForAJob: boolean
  lookingForAJobDescription: string | null
  name: string | null
  userId: string
  id: string
  status: string
  photos: PhotoType
}

type UserPageStateType = {
  userInfo: UserInfoType
  isFetching: boolean
}

const initialState: UserPageStateType = {
  userInfo: {
    aboutMe: null,
    contacts: [],
    lookingForAJob: false,
    lookingForAJobDescription: null,
    name: '',
    userId: '',
    id: '',
    status: '',
    photos: {
      small: null,
      large: null
    }
  },
  isFetching: false
};

export const userPageReducerTs = ( state: UserPageStateType = initialState, action: ActionType ) => {
  switch ( action.type ) {
    case SET_USER_INFO:
      return {
        ...state,
        userInfo: { ...action.payload, userId: action.payload.id }

      };
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload
      };
    default:
      return state;
  }
};