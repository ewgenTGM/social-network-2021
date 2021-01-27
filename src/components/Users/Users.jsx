import React, {useEffect} from 'react';
import styles from './Users.module.css';
import User from "./User";
import axios from "axios";

const Users = (props) => {

    useEffect(() => {
        axios.get('https://social-network.samuraijs.com/api/1.0/users?page=4', {
            withCredentials: true
        })
            .then(response => props.setUsers(response.data.items));
    }, []);

    const users = props.users.map(user => (<User
        user={user}
        key={user.id}
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