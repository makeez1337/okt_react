import {configureStore} from "@reduxjs/toolkit";

import carReducer from "./car.slice";
import userReducer from "./user.slice";
import commentReducer from "./comment.slice";
import postReducer from "./post.slice";

const store = configureStore({
    reducer: {
        carReducer,
        userReducer,
        commentReducer,
        postReducer
    }
})

export default store;