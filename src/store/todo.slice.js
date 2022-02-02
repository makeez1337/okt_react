import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    todoList: [],
    allTasks: 0,
    completedTasks: 0,
}

const emptyStringRegEXP = /^\s+$/

const todoSlice = createSlice({
    name: 'todoSlice',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const taskName = action.payload.data.todo;
            if (taskName && !taskName.match(emptyStringRegEXP) ) {
                state.todoList.push({...action.payload.data, id: new Date().getTime()});
                state.allTasks += 1;
            }
        },
        deleteTodo: (state, action) => {
            state.todoList.splice(action.payload.index, 1);

            state.allTasks -= 1;

            if (action.payload.task.status) {
                state.completedTasks -= 1;
            }
        },
        isCheckedStatus: (state, action) => {
            const index = action.payload.index;

            state.todoList[index] = {...state.todoList[index], status: action.payload.status};

            action.payload.status === true ? state.completedTasks += 1 : state.completedTasks -= 1;
        }

    }
})


const todoReducer = todoSlice.reducer;

export const {addTodo, deleteTodo, isCheckedStatus} = todoSlice.actions;

export default todoReducer;