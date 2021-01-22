import React from 'react';
import styles from './User.module.css'

const User = (props) => {
    return (
        <div className={styles.user}>
            <div>{props.user.userId}</div>
            <div>{props.user.name}</div>
            <div>{props.user.surname}</div>
            <div>{props.user.location.country}</div>
            <div>{props.user.location.city}</div>
            <div>{props.user.status}</div>
            <div>Follow: {props.user.isFollow? "Follow" : "Not follow"}</div>
        </div>
    );
}

export default User;