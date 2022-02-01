import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    todoList: [],
    allTasks: 0,
    completedTasks: 0,
}

const todoSlice = createSlice({
    name: 'todoSlice',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todoList.push({...action.payload.data, id: new Date().getTime()});
            state.allTasks += 1;
        },
        deleteTodo: (state, action) => {
            state.todoList.splice(action.payload.index, 1);
            state.allTasks -= 1;
            if (action.payload.task.status && action.payload.task.status === true) {
                state.completedTasks -= 1;
            }

        },
        isCheckedStatus: (state, action) => {
            state.todoList.map(list => {
                if (list.id === action.payload.id) {
                    list.status = action.payload.status;
                }
                return list;
            })
            if (action.payload.status === true) {
                state.completedTasks += 1;
            } else {
                state.completedTasks -= 1;
            }
        }

    }
})


const todoReducer = todoSlice.reducer;

export const {addTodo, deleteTodo, isCheckedStatus} = todoSlice.actions;

export default todoReducer;