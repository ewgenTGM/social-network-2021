import styles from './Messages.module.css';
import { useState } from 'react';
import { MessageType } from '../../redux/redux-ts/dialog-reducer-ts';

type PropsType = {
  messages: Array<MessageType>
  sendMessage: ( text: string ) => void
}

export const Messages = ( props: PropsType ) => {
      const [ messageText, setMessageText ] = useState<string>( '' );

      const messagesElements: Array<JSX.Element> = props.messages.map( item =>
          <div key={ item.messageId }>{ item.message }</div> );

      const sendMessage = () => {
        props.sendMessage( messageText );
        setMessageText( '' );
      };


      return (
          <div className={ styles.messages }>
            { messagesElements }
            <div className={ styles.send_message_block }>
                <textarea
                    cols={ 50 }
                    rows={ 3 }
                    value={ messageText }
                    onChange={ ( e ) => {
                      setMessageText( e.currentTarget.value );
                    } }/>
              <button
                  className={ styles.send_message_btn }
                  onClick={ sendMessage }>
                Отправить сообщение
              </button>
            </div>
          </div>
      );
    }
;
