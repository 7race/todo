import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
  active: 'all' | 'todo' | 'done';
};

const initialState: InitialState = {
  active: 'all',
};

const ActiveTasksSlice = createSlice({
  name: 'ActiveTasks',
  initialState,
  reducers: {
    changeActiveStatus: (state: InitialState, { payload }: PayloadAction<'all' | 'todo' | 'done'>) => {
      state.active = payload;
    },
  },
});

export const activeTasksReducer = ActiveTasksSlice.reducer;
export const { changeActiveStatus } = ActiveTasksSlice.actions;
