import {v1} from "uuid";

const SEND_MESSAGE = 'SEND_MESSAGE'


export const sendMessageAC = (text) => {
    return {type: SEND_MESSAGE, payload: text}
}

const initialState = {
    dialogs: [
        {userId: 0, userName: 'Марина'},
        {userId: 1, userName: 'Иван'},
        {userId: 2, userName: 'Дарья'},
        {userId: 3, userName: 'Алексей'},
        {userId: 4, userName: 'Саня'},
    ],
    messages: [
        {messageId: 0, message: 'Привет, Марина'},
        {messageId: 1, message: 'Привет, Иван'},
        {messageId: 2, message: 'Привет, Дарья'},
        {messageId: 3, message: 'Привет, Алексей'},
        {messageId: 4, message: 'Привет, Саня'},
    ],
}

const dialogReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE: {
            const newMessage = {
                messageId: v1(),
                message: action.payload
            };
            return {
                ...state,
                messages: [newMessage, ...state.messages]
            }
        }
        default:
            return state
    }
}

export default dialogReducer;