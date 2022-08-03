import { configureStore } from '@reduxjs/toolkit';
import { activeTasksReducer } from './slices/ActiveTasks';

export const store = configureStore({
  reducer: { activeTasks: activeTasksReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
