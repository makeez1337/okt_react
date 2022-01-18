import React from 'react';
import css from './UserPost.module.css'

const UserPost = ({post}) => {

    const {userId,id,title, body} = post;

    return (
        <div className={css.post_style}>
            <div>userId:{userId}, postId:{id}</div>
            <div>{title}</div>
            <div>{body}</div>
        </div>
    );
};

export default UserPost;