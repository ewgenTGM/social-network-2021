export const SEND_MESSAGE = 'SEND_MESSAGE'


export const sendMessageAC = (text) => {
    return {type: SEND_MESSAGE, payload: text}
}

const initialState = {
    dialogItems: [
        {userId: 1, userName: 'Марина'},
        {userId: 2, userName: 'Иван'},
        {userId: 3, userName: 'Дарья'},
        {userId: 4, userName: 'Алексей'},
        {userId: 5, userName: 'Саня'},
    ],
    userMessages: {
        messageItems: [
            {messageId: 1, message: 'Привет, Марина'},
            {messageId: 2, message: 'Привет, Иван'},
            {messageId: 3, message: 'Привет, Дарья'},
            {messageId: 4, message: 'Привет, Алексей'},
            {messageId: 5, message: 'Привет, Саня'},
        ],
    }
}

const dialogReducer = (state = initialState, action) => {

    const sendMessage = (text) => {

        state.userMessages.messageItems.unshift({
            messageId: +Math.random().toFixed(3),
            message: text
        });
    }


    if (action.type === SEND_MESSAGE) {
        sendMessage(action.payload);
    }

    return state;
}

export default dialogReducer;