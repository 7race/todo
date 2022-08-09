import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import uniqid from 'uniqid';

type Task = {
  id: string;
  value: string;
  isDone: boolean;
};

type InitialState = {
  allTasks: Task[];
  todoTasks: Task[];
  doneTasks: Task[];
  active: 'all' | 'todo' | 'done';
};

type ClickTaskParams = {
  id: string;
  value: string;
  isDone: boolean;
};

type PressEnterToCreateTask = {
  value: string;
};

const initialState: InitialState = {
  allTasks: [],
  todoTasks: [],
  doneTasks: [],
  active: 'all',
};

const TasksSlice = createSlice({
  name: 'Tasks',
  initialState,
  reducers: {
    setAll: (state, { payload }: PayloadAction<ClickTaskParams>) => {
      const { allTasks } = state;
      const { id, value, isDone } = payload;
      if (!isDone) {
        const all = allTasks.map((task) => (task.id === id ? { id, value, isDone: true } : task));
        state.allTasks = all;
      } else {
        const { allTasks } = state;
        const all = allTasks.map((task) => (task.id === id ? { id, value, isDone: false } : task));
        state.allTasks = all;
      }
    },
    setTodo: (state) => {
      const { allTasks } = state;
      const todo = allTasks.filter((task) => task.isDone === false);
      state.todoTasks = todo;
    },
    setDone: (state) => {
      const { allTasks } = state;
      const done = allTasks.filter((task) => task.isDone === true);
      state.doneTasks = done;
    },
    createNewTask: (state, { payload }: PayloadAction<PressEnterToCreateTask>) => {
      const id = uniqid();
      let { allTasks, todoTasks } = state;
      const { value } = payload;
      allTasks = [{ id, value, isDone: false }, ...state.allTasks];
      todoTasks = [{ id, value, isDone: false }, ...state.todoTasks];

      state.allTasks = allTasks;
      state.todoTasks = todoTasks;
    },
    clearDoneTasks: (state) => {
      const { allTasks } = state;
      state.allTasks = allTasks.filter((task) => task.isDone === false);
      state.doneTasks = [];
    },
    changeActiveStatus: (state: InitialState, { payload }: PayloadAction<'all' | 'todo' | 'done'>) => {
      state.active = payload;
    },
  },
});

export const TasksReducer = TasksSlice.reducer;
export const { setAll, setTodo, setDone, createNewTask, clearDoneTasks, changeActiveStatus } = TasksSlice.actions;
