import { messagesReducer } from '@entities/messages/models';
import { opponentReducer } from '@entities/opponent/models';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

export const store = configureStore({
  reducer: {
    messages: messagesReducer,
    opponent: opponentReducer,
  },
});

declare global {
  type AppDispatch = typeof store.dispatch;
  type RootState = ReturnType<typeof store.getState>;
}

export const Store: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);
