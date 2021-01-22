import React from 'react';
import styles from './Users.module.css';
import User from "./User";

const Users = (props) => {
    const users = props.users.map(user => (<User
        user={user}
        key={user.userId}
        follow={props.follow}
        unfollow={props.unfollow}/>));
    return (
        <>
            <h3 className={styles.users_title}>Пользователи соцсети:</h3>
            <div className={styles.users}>
                {users}
            </div>
        </>
    );
}

export default Users;