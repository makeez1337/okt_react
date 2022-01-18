import React, {useEffect, useState} from 'react';

import {postService} from "../../services/post.service";
import Post from "../Post/Post";
import css from './Posts.module.css'

const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAll().then(res => setPosts([...res]));
    }, [])

    return (
            <div className={css.posts_wrap}>
                {
                    posts.map(value => <Post post={value} key={value.id}/>)
                }
            </div>
    );
};

export default Posts;