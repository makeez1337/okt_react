import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";

const initialState = {
    movies: [],
    moviesStatus: null,
    moviesErr: null,
    genres: [],
    genresStatus: null,
    genresErr: null,
    activeGenres: [],
    filteredGenresStatus: null,
    filteredGenresErr: null,
    videos: [],
    totalPages: 500,
    totalFilteredPages: null
}

export const getMovieThunk = createAsyncThunk(
    'movieSlice/getMovieThunk',
    async ({page}, {rejectWithValue}) => {
        try {
            return await movieService.getByPage(page);
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
)

export const getGenresThunk = createAsyncThunk(
    'movieSlice/getGenresThunk',
    async (_, {rejectWithValue}) => {
        try {
            return await movieService.getGenres();
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
)

export const getMoviesByGenre = createAsyncThunk(
    'movieSlice/getMovieByGenre',
    async ({genres, page, activeGenresNames}, {rejectWithValue}) => {
        try {
            return await movieService.getByGenre(genres, page);
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
)

export const getVideoThunk = createAsyncThunk(
    'movieSlice/getVideoThunk',
    async ({id}, {rejectWithValue}) => {
        try {
            return await movieService.getVideoById(id);
        } catch (e) {
            return rejectWithValue(e.message);
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
        removeActiveGenres: (state) => {
            state.activeGenres = [];
            state.totalFilteredPages = null;
            state.genres = state.genres.map(genre => {
                return {...genre, isActive: false}
            })
        },
        cancelVideos: (state) => {
            state.videos = [];
        }
    },
    extraReducers: {

        [getMovieThunk.pending]: (state, action) => {
            state.moviesStatus = 'loading';
            state.moviesErr = null;
        },
        [getMovieThunk.fulfilled]: (state, action) => {
            state.movies = action.payload.results;
            state.moviesStatus = 'fulfilled';
            state.moviesErr = null;
        },
        [getMovieThunk.rejected]: (state, action) => {
            state.moviesStatus = 'rejected';
            state.moviesErr = action.payload;
        },

        [getGenresThunk.pending]: (state) => {
            state.genres = [];
            state.genresStatus = 'loading';
            state.genresErr = null
        },
        [getGenresThunk.fulfilled]: (state, action) => {
            state.genres = action.payload.genres.map(genre => {
                return {...genre, isActive: false};
            })
            state.genresStatus = 'fulfilled';
            state.genresErr = null;
        },
        [getGenresThunk.rejected]: (state, action) => {
            state.genres = [];
            state.genresStatus = 'rejected';
            state.genresErr = action.payload;
        },

        [getMoviesByGenre.pending]: (state, action) => {
            state.totalFilteredPages = null
            state.filteredGenresStatus = 'loading';
            state.movies = [];
        },
        [getMoviesByGenre.fulfilled]: (state, action) => {
            state.totalFilteredPages = action.payload['total_pages'];
            state.movies = action.payload.results;
            state.filteredGenresStatus = 'fulfilled';

        },
        [getMoviesByGenre.rejected]: (state, action) => {
            state.filteredGenresStatus = 'rejected';
            state.totalFilteredPages = null
            state.movies = [];
            state.filteredGenresErr = action.payload;
        },

        [getVideoThunk.fulfilled]: (state, action) => {
            state.videos = action.payload.results;
        }
    }
});

const movieReducer = movieSlice.reducer;

export const {addGenre, removeActiveGenres, cancelVideos} = movieSlice.actions;

export default movieReducer;
