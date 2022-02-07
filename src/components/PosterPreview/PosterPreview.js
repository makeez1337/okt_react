import React from 'react';

import css from './PosterPreview.module.css'

const PosterPreview = ({img, movie}) => {


    return (
        <div className={css.img_wrap}><img src={img} alt=""/></div>
    );
};

export {PosterPreview};