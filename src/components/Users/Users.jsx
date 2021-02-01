import React, {useEffect} from 'react';
import styles from './Users.module.css';
import User from "./User";
import Spinner from "../Spinner/Spinner";

const Users = (props) => {
    useEffect(() => {
        console.log('did mount')
        props.setUsers(1);
        props.setCurrentPage(1)
    }, []);

    // useEffect(() => {
    //     return props.setCurrentPage(1)
    // }, []);

    const users = props.users.map(user => (<User
        user={user}
        key={user.id}
        followed={props.followed}
        follow={props.follow}
        unfollow={props.unfollow}/>));

    const usersAPIInfo = (
            <>
                <span>Current page: {props.currentPage}</span>
                <br/>
                <span>Total users count: {props.totalUsersCount}</span>
            </>
        )
    ;


    const pagesButton = [];
    for (let i = 1; i < 100; i++) {
        pagesButton.push(<button
            className={styles.set_page_btn}
            onClick={() => {
                props.setCurrentPage(i);
                props.setUsers(i)
            }}>{i}
        </button>)
    }


    return (
        <>
            {props.isFetching ? <Spinner/> : usersAPIInfo}
            <h3 className={styles.users_title}>Пользователи соцсети:</h3>
            {pagesButton}
            <div className={styles.users}>
                {props.isFetching ? <Spinner/> : users}
            </div>
        </>
    );
}

export default Users;