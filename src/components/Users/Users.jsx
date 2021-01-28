import React, {useEffect} from 'react';
import styles from './Users.module.css';
import User from "./User";
import userAPI from "../../DAL/api";
import spinner_image from './spinner.gif';

const Users = (props) => {

    useEffect(() => {
        console.log('props user before:', props.users)
        props.setIsFetching(true);
        userAPI.getUsers(5).then(response => {
            props.setCurrentPage(1);
            props.setUsersPerPage(10);
            props.setUsers(response.data.items);
            props.setTotalUsersCount(response.data.totalCount);
            props.setPageCount(Math.ceil((props.totalUsersCount / props.usersPerPage)));
            props.setIsFetching(false);
        });

        console.log('props user after:', props.users)
    }, []);

    const users = props.users.map(user => (<User
        user={user}
        key={user.id}
        followed={props.followed}
        follow={props.follow}
        unfollow={props.unfollow}/>));

    const spinner = (
        <img
            className={styles.spinner}
            src={spinner_image}
            alt=''/>
    );

    const usersAPIInfo = (
            <>
                <span>Current page: {props.currentPage}</span>
                <br/>
                <span>Users per page: {props.usersPerPage}</span>
                <br/>
                <span>Page count: {props.pageCount}</span>
                <br/>
                <span>Total users count: {props.totalUsersCount}</span>
            </>
        )
    ;

    return (
        <>
            {props.isFetching ? spinner : usersAPIInfo}
            <h3 className={styles.users_title}>Пользователи соцсети:</h3>
            <div className={styles.users}>
                {props.isFetching ? spinner : users}
            </div>
        </>
    );
}

export default Users;