import React from 'react';

import '../Comment/CommentStyle.css';

const CommentComponent = (props) => {
    const {properties: {name, email, body}} = props;
    return (
        <div className='comment_style'>
            <p>{name}</p>
            <p className={'email_color'}>{email}</p>
            <p className={'body_color'}>{body}</p>
        </div>
    );
};

export default CommentComponent;