import React, {useEffect, useState} from 'react';

import PostComponent from './PostComponent'
import {getPosts} from '../../services/getApi'
import './Posts.css'

const Posts = () => {

    const [post, setPost] = useState([]);

    useEffect(() => {
        getPosts().then(posts => {
            setPost(posts);
        })
    }, [])


    return (
        <div className={'posts_menu'}>
            <h1 className={'color_gold'}>POSTS</h1>
            <div className={'posts_wrap'}>
                {
                    post.map(value => {
                        return <PostComponent key={value.id} properties={value}/>
                    })
                }
            </div>

        </div>
    );
};

export default Posts;