import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";

const initialState = {
    movies: [],
    genres: [],
    totalPages: 500,
    activeGenres: [],
    totalFilteredPages: null,
    videos: []
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
    async ({genres, page}, {rejectWithValue}) => {
        try {
            return await movieService.getByGenre(genres, page);
        } catch (e) {
            return rejectWithValue(e);
        }
    }
)

export const getVideoThunk = createAsyncThunk(
    'movieSlice/getVideoThunk',
    async ({id},{rejectWithValue}) => {
        try {
            return await movieService.getVideoById(id);
        } catch (e) {
            return rejectWithValue(e);
        }
    }
)


const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        addGenre: (state, action) => {
            state.genres.map(genre => {
                if (genre.id === action.payload) {
                    genre.isActive = !genre.isActive;
                }
                return genre;
            })
            state.activeGenres = state.genres.filter(genre => genre.isActive);
        },
        removeActiveGenres : (state,action) => {
            state.activeGenres = [];
            state.totalFilteredPages = null;
            state.genres = state.genres.map(genre => {
                return {...genre, isActive: false}
            })
        },
        cancelVideos:(state,action) => {
            state.videos = [];
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
        [getMoviesByGenre.fulfilled]: (state, action) => {
            state.totalFilteredPages = action.payload['total_pages'];
            state.movies = action.payload.results;
        },
        [getVideoThunk.fulfilled]: (state,action) => {
            state.videos = action.payload.results;
        }
    }
});

const movieReducer = movieSlice.reducer;

export const {addGenre,removeActiveGenres,cancelVideos} = movieSlice.actions;

export default movieReducer;
