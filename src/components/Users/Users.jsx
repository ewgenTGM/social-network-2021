import React, {useEffect} from 'react';
import styles from './Users.module.css';
import User from "./User";
import {getUsers} from "../../DAL/api";

const Users = (props) => {
    useEffect(() => {
        getUsers(5).then(response => {
            props.setCurrentPage(1);
            props.setUsersPerPage(10);
            props.setUsers(response.data.items);
            props.setTotalUsersCount(response.data.totalCount);
            props.setPageCount(Math.ceil((props.totalUsersCount / props.usersPerPage)))
        });
    }, []);

    const users = props.users.map(user => (<User
        user={user}
        key={user.id}
        follow={props.follow}
        unfollow={props.unfollow}/>));
    return (
        <>
            <span>Current page: {props.currentPage}</span><br/>
            <span>Users per page: {props.usersPerPage}</span><br/>
            <span>Page count: {props.pageCount}</span><br/>
            <span>Total users count: {props.totalUsersCount}</span>
            <h3 className={styles.users_title}>Пользователи соцсети:</h3>
            <div className={styles.users}>
                {users}
            </div>

        </>
    );
}

export default Users;