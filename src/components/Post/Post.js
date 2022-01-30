import React from 'react';

import css from './Post.module.css'

const Post = ({post}) => {
    return (
        <div className={css.post_wrap}>
            <div>id:{post.id}</div>
            <div>title:{post.title}</div>
            <div>body:{post.body}</div>
        </div>
    );
};

export {Post};