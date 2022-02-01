import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    todoList: [],
    allTasks: 0,
    completedTasks: 0
}

const todoSlice = createSlice({
    name: 'todoSlice',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todoList.push({...action.payload.data,id:new Date().getTime()});
            state.allTasks += 1;
        }
    }
})


const todoReducer = todoSlice.reducer;

export const {addTodo} = todoSlice.actions;

export default todoReducer;