import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    darkMode: false
}

const darkmodeSlice = createSlice({
    name: 'darkmodeSlice',
    initialState,
    reducers: {
        changeMode: (state, action) => {
            state.darkMode = !state.darkMode;
        }
    }
});


const darkmodeReducer = darkmodeSlice.reducer;

export const {changeMode} = darkmodeSlice.actions;

export default darkmodeReducer;