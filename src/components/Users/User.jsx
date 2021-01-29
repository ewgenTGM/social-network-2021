import React from 'react';
import styles from './User.module.css'
import noAvatar from './no_avatar.png';
import {Link} from "react-router-dom";

const User = (props) => {
    return (
        <div className={styles.user}>
            <div className={styles.user_info_follow}>
                <Link to={`userPage/${props.user.id}`}><img
                    src={props.user.photos.small ? props.user.photos.small : noAvatar}
                    alt={'ava'}/></Link>

                <button className={styles.btn_follow}>{props.user.followed ? 'Unfollow' : 'Follow'}</button>
            </div>
            <div className={styles.user_info_block}>
                <div>Id: {props.user.id}</div>
                <div>Name: {props.user.name}</div>
                <div>Status: {props.user.status}</div>
            </div>
        </div>
    );
}

export default User;