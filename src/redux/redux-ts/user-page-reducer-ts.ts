import userAPI from '../../DAL/api';

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

type DispatchType = ( action: ActionType ) => UserPageStateType;

export const setUserInfo = ( id: string ) => {
  return ( dispatch: DispatchType ) => {
    dispatch( setIsFetchingAC( true ) );
    userAPI.getUserInfoById( id ).then( response => {
      dispatch( setUserInfoAC( response.data ) );
      dispatch( setIsFetchingAC( false ) );
    } );
  };
};

type ContactType = {
  facebook: null | string
  website: null | string
  vk: null | string
  twitter: null | string
  instagram: null | string
  youtube: null | string
  github: null | string
  mainLink: null | string
}

type PhotoType = {
  small: string | null
  large: string | null
}

export type UserInfoType = {
  aboutMe: string | null
  contacts: ContactType
  lookingForAJob: boolean
  lookingForAJobDescription: string | null
  fullName: string | null
  userId: string | null
  photos: PhotoType
}

type UserPageStateType = {
  userInfo: UserInfoType
  isFetching: boolean
}

const initialState: UserPageStateType = {
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
};

export const userPageReducerTs = ( state: UserPageStateType = initialState, action: ActionType ) => {
  switch ( action.type ) {
    case SET_USER_INFO:
      return {
        ...state,
        userInfo: action.payload
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