import React from 'react';
import styles from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import MessagesContainer from "../Messages/MessagesContainer";

const Dialogs = (props) => {

    const dialogs = props.dialogs.map(item => {
        return (
            <div className={styles.dialog_list_item} key={item.userId}>
                <NavLink
                    to={`/dialogs/${item.userId}`}
                    activeClassName={styles.dialog_link_active}
                    key={item.userId}>{item.userName}</NavLink>
            </div>
        )
    });
    return (
        <>
            <h3 className={styles.my_dialogs_title}>Мои беседы:</h3>
            <div className={styles.dialogs}>
                <div className={styles.dialog_list}>
                    <div className={styles.dialog_list}>
                        {dialogs}
                    </div>
                </div>
                <div className={styles.dialog_messages_block}>
                    <MessagesContainer/>
                </div>
            </div>

        </>
    )
};

export default Dialogs;
