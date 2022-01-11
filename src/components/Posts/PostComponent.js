import React from 'react';

import './PostStyle.css';

const PostComponent = (props) => {
    const {properties: {title,body}} = props;
    return (
        <div className={'post_style'}>
            <h5 className={'title_color'}>{title}</h5>
            <p>{body}</p>
        </div>
    );
};

export default PostComponent;