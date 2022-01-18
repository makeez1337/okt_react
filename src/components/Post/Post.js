import React from 'react';

import css from './Post.module.css'
import {Link} from "react-router-dom";


const Post = ({post}) => {

    const {id,title, body} = post;

    return (
        <div className={css.post_style}>
            <div><Link state={post} className={css.text_style} to={id.toString()}>{title}</Link></div>
            <hr/>
        </div>
    );
};

export default Post;