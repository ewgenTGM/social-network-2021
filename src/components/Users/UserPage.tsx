/*
 import React, { useEffect } from 'react'
 import Spinner from "../Spinner/Spinner";
 import styles from './UserPage.module.css'
 import noAvatar from './no_avatar.png'

 const UserPage = ( props ) => {
 const { setUserInfo } = props;
 const { id } = props.match.params;

 useEffect( () => {
 setUserInfo( id )
 }, [ id, setUserInfo ] );


 const contacts = [];
 for ( const key in props.userInfo.contacts ) {
 if ( props.userInfo.contacts[ key ] ) {
 contacts.push( <li key={ key }>{ key }: { props.userInfo.contacts[ key ] }</li> )
 }
 }
 const content = (
 <div className={ styles.userPage }>
 <img
 src={ props.userInfo.photos.large ? props.userInfo.photos.large : noAvatar }
 className={ styles.avatar_large }
 alt=""/>
 <div className={ styles.user_page_info }>
 <h2>{ props.userInfo.fullName }</h2>
 <p>Id: { props.userInfo.userId }</p>
 <p>Обо мне: { props.userInfo.aboutMe ? props.userInfo.aboutMe : 'Здесь пока пусто....' }</p>
 { contacts.length > 0
 ? ( <><p>Контакты:</p>
 <ul>{ contacts }</ul>
 </> )
 : <p>Контактов нет...</p> }
 <p>Ищет работу?: { props.userInfo.lookingForAJob ? 'да' : 'нет' }</p>
 </div>
 </div>
 );

 return (
 <>
 { props.isFetching ? <Spinner/> : content }
 </>
 )
 }


 export default UserPage;*/

import React, { useEffect } from 'react';
import { Spinner } from '../Spinner/Spinner';
import styles from './UserPage.module.css';
import noAvatar from './no_avatar.png';
import { UserInfoType } from '../../redux/redux-ts/user-page-reducer-ts';
import { RouteComponentProps } from 'react-router';

type PropsType = {
  userInfo: UserInfoType
  setUserInfo: ( userId: string ) => void
  isFetching: boolean
} & RouteComponentProps<Params>

type Params = { id: string }


export const UserPage = ( props: PropsType ) => {
  const { setUserInfo } = props;
  const { id } = props.match.params;

  useEffect( () => {
    debugger
    setUserInfo( id );
  }, [ id, setUserInfo ] );


  /*const contacts = [];
   for ( const key in props.userInfo.contacts ) {
   if ( props.userInfo.contacts[key] ) {
   contacts.push( <li key={ key }>{ key }: { props.userInfo.contacts[key] }</li> );
   }
   }*/
  const content = (
      <div className={ styles.userPage }>
        <img
            src={ props.userInfo.photos.large ? props.userInfo.photos.large : noAvatar }
            className={ styles.avatar_large }
            alt=""/>
        <div className={ styles.user_page_info }>
          <h2>{ props.userInfo.fullName }</h2>
          <p>Id: { props.userInfo.userId }</p>
          <p>Обо мне: { props.userInfo.aboutMe ? props.userInfo.aboutMe : 'Здесь пока пусто....' }</p>
          {/*{ contacts.length > 0
           ? ( <><p>Контакты:</p>
           <ul>{ contacts }</ul>
           </> )
           : <p>Контактов нет...</p> }*/ }
          <p>Ищет работу?: { props.userInfo.lookingForAJob ? 'да' : 'нет' }</p>
        </div>
      </div>
  );

  return (
      <>
        { props.isFetching ? <Spinner/> : content }
      </>
  );
};