import React from 'react';
import styles from './User.module.css'
import noAvatar from './no_avatar.png';

const User = (props) => {
    return (
        <div className={styles.user}>
            <img src={props.user.photos.small? props.user.photos.small : noAvatar} alt={'ava'}/>
            <div>{props.user.id}</div>
            <div>{props.user.name}</div>
            <div>{props.user.status}</div>
            <div>{props.user.followed ? "Followed" : "Not followed"}</div>
        </div>
    );
}

export default User;