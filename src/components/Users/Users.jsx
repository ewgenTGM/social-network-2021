import React, {useEffect} from 'react';
import styles from './Users.module.css';
import User from "./User";
import spinner_image from './spinner.gif';

const Users = (props) => {
    useEffect(() => {
        props.setUsers(props.currentPage);
    }, [props.currentPage]);

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
                <span>Total users count: {props.totalUsersCount}</span>
            </>
        )
    ;

    return (
        <>

            {props.isFetching ? spinner : usersAPIInfo}
            <h3 className={styles.users_title}>Пользователи соцсети:</h3>
            <button
                className={styles.set_page_btn}
                onClick={() => props.setCurrentPage(1)}>1
            </button>
            <button
                className={styles.set_page_btn}
                onClick={() => props.setCurrentPage(2)}>2
            </button>
            <button
                className={styles.set_page_btn}
                onClick={() => props.setCurrentPage(3)}>3
            </button>
            <button
                className={styles.set_page_btn}
                onClick={() => props.setCurrentPage(4)}>4
            </button>
            <button
                className={styles.set_page_btn}
                onClick={() => props.setCurrentPage(5)}>5
            </button>
            <div className={styles.users}>
                {props.isFetching ? spinner : users}
            </div>
        </>
    );
}

export default Users;