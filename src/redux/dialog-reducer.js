import {v1} from "uuid";

export const SEND_MESSAGE = 'SEND_MESSAGE'


export const sendMessageAC = (text) => {
    return {type: SEND_MESSAGE, payload: text}
}

const initialState = {
    dialogs: [
        {userId: v1(), userName: 'Марина'},
        {userId: v1(), userName: 'Иван'},
        {userId: v1(), userName: 'Дарья'},
        {userId: v1(), userName: 'Алексей'},
        {userId: v1(), userName: 'Саня'},
    ],
    messages: [
        {messageId: v1(), message: 'Привет, Марина'},
        {messageId: v1(), message: 'Привет, Иван'},
        {messageId: v1(), message: 'Привет, Дарья'},
        {messageId: v1(), message: 'Привет, Алексей'},
        {messageId: v1(), message: 'Привет, Саня'},
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