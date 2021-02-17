import React, { useEffect } from 'react';
import styles from './Users.module.css';
import User from "./User";
import Spinner from "../Spinner/Spinner";

const Users = ( props ) => {
    const { setUsers, setCurrentPage } = props;
    useEffect( () => {
        setUsers( 1 );
        setCurrentPage( 1 )
    }, [ setUsers, setCurrentPage ] );

    const users = props.users.map( user => ( <User
        user={ user }
        key={ user.id }
        followed={ props.followed }
        follow={ props.follow }
        unfollow={ props.unfollow }/> ) );

    const usersAPIInfo = (
            <>
                <span>Current page: { props.currentPage }</span>
                <br/>
                <span>Total users count: { props.totalUsersCount }</span>
            </>
        )
    ;

    const pagesButtons = [];
    for ( let i = 1; i < 100; i++ ) {
        pagesButtons.push( <button
            key={ i }
            className={ styles.set_page_btn }
            onClick={ () => {
                setCurrentPage( i );
                setUsers( i )
            } }>{ i }
        </button> )
    }


    return (
        <>
            { props.isFetching ? <Spinner/> : usersAPIInfo }
            <h3 className={ styles.users_title }>Пользователи соцсети:</h3>
            { pagesButtons }
            <div className={ styles.users }>
                { props.isFetching ? <Spinner/> : users }
            </div>
        </>
    );
}

export default Users;