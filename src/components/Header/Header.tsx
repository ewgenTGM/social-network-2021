import React, { useEffect } from 'react';
import classes from './Header.module.css';
import ussr from '../../Logo.svg';
import userAPI from '../../DAL/api';
import { HeaderReducerStateType } from '../../redux/header-reducer';
import { AuthStateType } from '../../redux/redux-ts/auth-reducer-ts';

type PropsType = {
  me: HeaderReducerStateType
  isAuth: AuthStateType
  setMe: ( id: string, login: string, email: string ) => void
  setIsAuth: ( isAuth: boolean ) => void
}

export const Header = ( props: PropsType ) => {

  useEffect( () => {
    userAPI.getMe().then( response => {
      props.setMe( response.data.data.id, response.data.data.login, response.data.data.email );
      props.setIsAuth( response.data.resultCode === 0 );
    } );
  }, [] );

  return (
      <div>
        <header className={ classes.header }>
          <img
              src={ ussr }
              alt="Logo"
              className={ classes.logo }/>
          <div className={ classes.brand }>СССR - самая социальная сеть на React'e</div>
          <div className={ classes.sign_in_info }>
            <span>---id: { props.me.id }, </span>
            <span>login: { props.me.login }, </span>
            <span>email: { props.me.email }---.</span>
            <span>isAuth: { props.isAuth ? 'yes' : 'no' }---.</span>
          </div>
        </header>

      </div>
  );

};
