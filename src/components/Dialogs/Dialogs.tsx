import React from 'react';
import styles from './Dialogs.module.css';
import MessagesContainer from '../Messages/MessagesContainer';
import { NavLink } from 'react-router-dom';
import { DialogType } from '../../redux/redux-ts/dialog-reducer-ts';

type PropsType = {
  dialogs: Array<DialogType>
}

export const Dialogs = ( props: PropsType ) => {

  const dialogs = props.dialogs.map( item => {
    return (
        <div
            className={ styles.dialog_list_item }
            key={ item.userId }>
          <NavLink
              to={ `/dialogs/${ item.userId }` }
              activeClassName={ styles.dialog_link_active }
              key={ item.userId }>{ item.userName }</NavLink>
        </div>
    );
  } );
  return (
      <>
        <h3 className={ styles.my_dialogs_title }>Мои беседы:</h3>
        <div className={ styles.dialogs }>
          <div className={ styles.dialog_list }>
            <div className={ styles.dialog_list }>
              { dialogs }
            </div>
          </div>
          <div className={ styles.dialog_messages_block }>
            <MessagesContainer/>
          </div>
        </div>

      </>
  );
};
