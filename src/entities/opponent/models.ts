import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ChatOpponentState {
  phone: string;
}

const initialState: ChatOpponentState = {
  phone: '',
};

export const opponentSlice = createSlice({
  name: 'opponent',
  initialState,
  reducers: {
    setPhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
  },
});

export const { setPhone } = opponentSlice.actions;

export const opponentReducer = opponentSlice.reducer;
