import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllPosts} from "../../store/post.slice";
import {Post} from "../../components";
import css from './PostPage.module.css'

const PostsPage = () => {

    const {posts, error, status} = useSelector(prev => prev['postReducer']);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPosts());
    }, [])

    console.log(posts);

    return (
        <div className={css.posts_wrap}>
            {posts && posts.map(post => <Post post={post} key={post.id}/>)}
            {status === 'pending' && <h1>LOADING</h1>}
            {status === 'rejected' && <h1>{error}</h1>}
        </div>
    );
};

export {PostsPage};