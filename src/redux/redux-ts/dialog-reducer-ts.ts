import { v1 } from 'uuid';

const SEND_MESSAGE = 'SEND_MESSAGE';

type SendMessageActionType = {
  type: typeof SEND_MESSAGE
  payload: string
}

export type ActionType = SendMessageActionType

export const sendMessageAC = ( text:string ): SendMessageActionType => {
  return { type: SEND_MESSAGE, payload: text };
};

export type DialogType = {
  userId: string
  userName: string
}

export type MessageType = {
  messageId: string
  message: string
}

export type DialogsStateType = {
  dialogs: Array<DialogType>
  messages: Array<MessageType>
}

const initialState: DialogsStateType = {
  dialogs: [
    { userId: '0', userName: 'Марина' },
    { userId: '1', userName: 'Иван' },
    { userId: '2', userName: 'Дарья' },
    { userId: '3', userName: 'Алексей' },
    { userId: '4', userName: 'Саня' }
  ],
  messages: [
    { messageId: '0', message: 'Привет, Марина' },
    { messageId: '1', message: 'Привет, Иван' },
    { messageId: '2', message: 'Привет, Дарья' },
    { messageId: '3', message: 'Привет, Алексей' },
    { messageId: '4', message: 'Привет, Саня' }
  ]
};

export const dialogReducerTs = ( state: DialogsStateType = initialState, action: ActionType ): DialogsStateType => {

  switch ( action.type ) {
    case SEND_MESSAGE: {
      const newMessage: MessageType = {
        messageId: v1(),
        message: action.payload
      };
      return {
        ...state,
        messages: [ newMessage, ...state.messages ]
      };
    }
    default:
      return state;
  }
};