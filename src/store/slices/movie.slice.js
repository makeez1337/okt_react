import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";

const initialState = {
    movies: [],
    genres: [],
    totalPages: 500,
    activeGenres: [],
    totalFilteredPages: null
}

export const getMovieThunk = createAsyncThunk(
    'movieSlice/getMovieThunk',
    async ({page}, {rejectWithValue}) => {
        try {
            return await movieService.getByPage(page);
        } catch (e) {
            return rejectWithValue(e);
        }
    }
)

export const getGenresThunk = createAsyncThunk(
    'movieSlice/getGenresThunk',
    async (_, {rejectWithValue}) => {
        try {
            return await movieService.getGenres();
        } catch (e) {
            return rejectWithValue(e);
        }
    }
)

export const getMoviesByGenre = createAsyncThunk(
    'movieSlice/getMovieByGenre',
    async ({genres,page},{rejectWithValue}) => {
        try {
            return await movieService.getByGenre(genres,page);
        }catch (e) {
            return rejectWithValue(e);
        }
    }
)


const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        addGenre: (state,action) => {
            state.genres.map(genre => {
                if (genre.id === action.payload) {
                    genre.isActive = !genre.isActive;
                }
                return genre;
            })
            state.activeGenres = state.genres.filter(genre => genre.isActive);
        }
    },
    extraReducers: {
        [getMovieThunk.fulfilled]: (state, action) => {
            state.movies = action.payload.results;
        },
        [getGenresThunk.fulfilled]: (state, action) => {
            state.genres = action.payload.genres.map(genre => {
                return {...genre, isActive: false};
            })
        },
        [getMoviesByGenre.fulfilled]:(state,action) => {
            console.log(action.payload);
            state.totalFilteredPages = action.payload['total_pages'];
            state.movies = action.payload.results;
        }
    }
});

const movieReducer = movieSlice.reducer;

export const {addGenre} = movieSlice.actions;

export default movieReducer;
