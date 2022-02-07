import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services/movie.service";

const initialState = {
    movies: [],
    genres: [],
    totalPages: 500
}

export const getMovieThunk = createAsyncThunk(
    'movieSlice/getMovieThunk',
    async ({page},{rejectWithValue}) => {
        try {
            return await movieService.getByPage(page);
        }catch (e) {
            return rejectWithValue(e);
        }
    }
)

export const getGenresThunk = createAsyncThunk(
    'movieSlice/getGenresThunk',
    async (_,{rejectWithValue})=>{
        try {
            return await movieService.getGenres();
        }catch (e) {
            return rejectWithValue(e);
        }
    }
)


const movieSlice = createSlice({
    name:'movieSlice',
    initialState,
    reducers: {

    },
    extraReducers:{
        [getMovieThunk.fulfilled]: (state, action) => {
            state.movies = action.payload.results;
        },
        [getGenresThunk.fulfilled]: (state,action) => {
            state.genres = action.payload;
        }
    }
});

const movieReducer = movieSlice.reducer;

export default movieReducer;