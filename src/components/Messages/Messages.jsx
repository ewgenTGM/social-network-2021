import styles from "./Messages.module.css";
import {useState} from "react";

const Messages = (props) => {
    debugger
    const [messageText, setMessageText] = useState('');

    const messagesElements = props.messages.map(item => <div key={item.messageId}>{item.message}</div>);

    return (
        <div className={styles.messages}>
            {messagesElements}
            <div className={styles.send_message_block}>
                <textarea cols="50" rows="3" value={messageText}
                          onChange={(e) => {
                              setMessageText(e.target.value);
                          }}/>
                <button className={styles.send_message_btn} onClick={() => {
                    props.sendMessage(messageText);
                    setMessageText('')
                }}>
                    Отправить сообщение
                </button>
            </div>
        </div>
    );
};

export default Messages;
