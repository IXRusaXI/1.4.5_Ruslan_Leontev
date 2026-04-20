import { configureStore } from '@reduxjs/toolkit';
import { modalReducer } from './modalSlice';
import { todoReducer } from './todoListSlice';

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    todo: todoReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;