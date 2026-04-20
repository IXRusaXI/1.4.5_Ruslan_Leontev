import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task, taskList } from '../entities/serverData/taskList';

interface TaskState {
    taskList: Task[];
    actualTask: Task | null;
}

const initialState: TaskState = {
    taskList: taskList,
    actualTask: null
};

export const todoListSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addNewTodo(state, action: PayloadAction<Task>) {
        state.taskList = [
            action.payload,
            ...state.taskList
        ]
    },
    editTodo(state, action: PayloadAction<Task>) {
        state.taskList = state.taskList.map(task => {
            if (task.id === action.payload.id) {
                return action.payload
            } else {
                return task
            }
    })},
    deleteTodo(state, action: PayloadAction<Task | null> ) {
            state.taskList = state.taskList.filter(task => task.id !== action.payload?.id)
    },
    setActualTask(state, action: PayloadAction<Task>) {
        state.actualTask = action.payload
    },
    clearTodo(state) {
        state.actualTask = null
    }
  },
});

export const todoActions = todoListSlice.actions;
export const todoReducer = todoListSlice.reducer;