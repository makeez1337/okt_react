import React from 'react';
import './Post.css'

const Post = (props) => {
    const {item: {userId,id,title, body}} = props;
    return (
        <div className={'post_style'}>
            userId:{userId} - postId:{id}
            <p className={'title_color'}>{title}</p>
            <p className={'body_color'}>{body}</p>
        </div>
    );
};

export default Post;