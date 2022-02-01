import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    todoList: []
}

const todoSlice = createSlice({
    name:'todoSlice',
    initialState,
    reducers: {

    }
})


const todoReducer = todoSlice.reducer;

export default todoReducer;