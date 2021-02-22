import React from 'react';
import styles from './User.module.css';
import noAvatar from './no_avatar.png';
import { Link } from 'react-router-dom';
import { UserInfoType } from '../../redux/redux-ts/user-page-reducer-ts';

type propsType = {
  user: UserInfoType
  followed: boolean
  follow: ( userId: string ) => void
  unfollow: ( userId: string ) => void
}

export const User = ( props: propsType ) => {
  return (
      <div className={ styles.user }>
        <div className={ styles.user_info_follow }>
          <Link to={ `userPage/${ props.user.id }` }><img
              src={ props.user.photos.small ? props.user.photos.small : noAvatar }
              alt={ 'ava' }/></Link>

          <button
              className={ styles.btn_follow }
              onClick={ () => props.follow( props.user.id ) }>{ props.followed ? 'Unfollow' : 'Follow' }</button>
        </div>
        <div className={ styles.user_info_block }>
          <div>Id: { props.user.id }</div>
          <div>Name: { props.user.name }</div>
          <div>Status: { props.user.status }</div>
        </div>
      </div>
  );
};