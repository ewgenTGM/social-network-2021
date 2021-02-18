const SET_IS_AUTH = 'SET_IS_AUTH';

type SetIsAuthActionType = {
  type: typeof SET_IS_AUTH
  payload: boolean
}

type AuthReducerActionType = SetIsAuthActionType

export const setIsAuthAC = ( isAuth: boolean ): SetIsAuthActionType => ( { type: SET_IS_AUTH, payload: isAuth } );

export type AuthStateType = {
  isAuth: boolean
}

const initialState: AuthStateType = {
  isAuth: false
};

export const authReducerTs = ( state: AuthStateType = initialState, action: AuthReducerActionType ) => {
  switch ( action.type ) {
    case SET_IS_AUTH:
      return { ...state, isAuth: action.payload };
    default:
      return state;
  }
};