import React from 'react';

import css from './Comment.module.css'

const Comment = ({comment}) => {
    const {postId, id, name, email,body} = comment;

    return (
            <div className={css.comment_style}>
                <div>postId: {postId}</div>
                <div>Id: {id}</div>
                <div>Mame: {name}</div>
                <div>Email: {email}</div>
                <div>Body: {body}</div>
            </div>
    );
};

export default Comment;