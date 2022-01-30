import React from 'react';

import css from './Comment.module.css'


const Comment = ({comment}) => {
    return (
        <div className={css.comment_style}>
            <div>{comment.id}</div>
            <div>{comment.name}</div>
            <div>{comment.email}</div>
            <div>Body:{comment.body}</div>
        </div>
    );
};

export {Comment};