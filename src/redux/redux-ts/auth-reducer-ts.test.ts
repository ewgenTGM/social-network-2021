import { authReducerTs, AuthStateType, setIsAuthAC } from './auth-reducer-ts';

test( 'Set is auth to true', () => {
  const state: AuthStateType = {
    isAuth: false
  };
  let value: boolean = true;
  const action = setIsAuthAC( value );
  let newState = authReducerTs( state, action );
  expect( state ).not.toBe( newState );
  expect( newState.isAuth ).toBe( value );
} );

test( 'Set is auth to false', () => {
  const state: AuthStateType = {
    isAuth: false
  };
  let value: boolean = false;
  const action = setIsAuthAC( value );
  let newState = authReducerTs( state, action );
  expect( state ).not.toBe( newState );
  expect( newState.isAuth ).toBe( value );
} );