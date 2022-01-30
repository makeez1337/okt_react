import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {postService} from "../services";

export const getAllPosts = createAsyncThunk(
    'postSlice/getAllPosts',
    async (_, {rejectWithValue}) => {
        try {
            const posts = await postService.getAll();
            return posts;
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
)


const postSlice = createSlice({
    name: 'postSlice',
    initialState: {
        posts: [],
        status: null,
        error: null
    },
    extraReducers: {
        [getAllPosts.pending]: (state, action) => {
            state.status = 'pending';
            state.error = null;
        },
        [getAllPosts.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.posts = action.payload;
            state.error = null;
        },
        [getAllPosts.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }
    }
})


const postReducer = postSlice.reducer;

export default postReducer;

