import {configureStore} from "@reduxjs/toolkit";

const store = configureStore({
    reducer:{
        todoReducer
    }
});

export {store};