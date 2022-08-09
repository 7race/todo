import { configureStore } from '@reduxjs/toolkit';
import { TasksReducer } from './slices/Tasks';

export const store = configureStore({
  reducer: { Tasks: TasksReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
