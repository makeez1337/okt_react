import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {postService} from "../services";

const getAllPosts = createAsyncThunk(
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
        [getAllPosts.pending]: (state,action) => {

        }
    }
})