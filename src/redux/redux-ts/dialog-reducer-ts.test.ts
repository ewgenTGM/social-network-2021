import { ActionType, dialogReducerTs, DialogsStateType, sendMessageAC } from './dialog-reducer-ts';

test( 'Send message', () => {
  const state: DialogsStateType = {
    dialogs: [],
    messages: [
      { messageId: '0', message: 'Привет, Марина' },
      { messageId: '1', message: 'Привет, Иван' },
      { messageId: '2', message: 'Привет, Дарья' },
      { messageId: '3', message: 'Привет, Алексей' },
      { messageId: '4', message: 'Привет, Саня' }
    ]
  };
  const newMessageText: string = 'Hello test!';
  const action: ActionType = sendMessageAC( newMessageText );
  const newState = dialogReducerTs( state, action );
  expect( newState.messages.length ).toBe( state.messages.length + 1 );
  expect( newState.messages[0].message ).toBe( newMessageText );
  expect( newState ).not.toBe( state );
  expect( newState.messages ).not.toBe( state.messages );
} );