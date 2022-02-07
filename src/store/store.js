import {combineReducers, configureStore} from "@reduxjs/toolkit";

import movieReducer from "./slices/movie.slice";

const rootReducer = combineReducers({
    movieReducer
})

export const setupStore = () => configureStore({
    reducer: rootReducer
})