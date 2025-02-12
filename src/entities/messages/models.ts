import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMessage } from '@features/chat';

interface ChatMessagesState {
  [chatId: string]: IMessage[];
}

const initialState: ChatMessagesState = {};

export const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<any>) => {
      const chatId = action.payload.chatId;
      if (!state[chatId]) {
        state[chatId] = [];
      }
      if (!state[chatId].some((msg) => msg.idMessage === action.payload.idMessage)) {
        state[chatId].push(action.payload);
      }
    },
  },
});

export const selectChatIds = (state: RootState) => Object.keys(state.messages);

export const selectMessagesByChatId = (state: RootState, chatId: string) => {
  const messages = state.messages[chatId];
  if (messages && messages.length > 0) {
    return messages;
  }
  return null;
};

export const selectLastMessageByChatId = (state: RootState, chatId: string) => {
  const messages = state.messages[chatId];
  if (messages && messages.length > 0) {
    return messages[messages.length - 1];
  }
  return null;
};

export const { addMessage } = messagesSlice.actions;

export const messagesReducer = messagesSlice.reducer;
