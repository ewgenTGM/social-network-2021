const SET_ME = 'SET_ME';


type SetMeActionType = {
  type: typeof SET_ME
  payload: {
    id: string
    login: string
    email: string
  }
};

type HeaderReducerActionsType = SetMeActionType;

export const setMeAC = ( id: string, login: string, email: string ): SetMeActionType => {
  return { type: SET_ME, payload: { id, login, email } };
};

export type HeaderReducerStateType = {
  id: string | null,
  login: string | null,
  email: string | null

}

const initialState: HeaderReducerStateType = {
  id: null,
  login: null,
  email: null

};

export const headerReducerTs = ( state: HeaderReducerStateType = initialState, action: HeaderReducerActionsType ): HeaderReducerStateType => {

  switch ( action.type ) {
    case SET_ME: {
      return {
        id: action.payload.id,
        login: action.payload.login,
        email: action.payload.email
      };
    }
    default:
      return state;
  }
};