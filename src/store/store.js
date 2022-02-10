import {combineReducers, configureStore} from "@reduxjs/toolkit";

import movieReducer from "./slices/movie.slice";
import darkmodeReducer from "./slices/darkmode.slice";

const rootReducer = combineReducers({
    movieReducer,
    darkmodeReducer
})

export const setupStore = () => configureStore({
    reducer: rootReducer
})