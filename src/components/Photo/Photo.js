import React from 'react';

import css from './Photo.module.css'

const Photo = ({photo}) => {

    const {id,albumId,title, url,thumbnailUrl} = photo;

    return (
        <div className={css.wrap}>
            <div>AlbumId: {albumId}, Id: {id}</div>
            <div>Title: {title}</div>
            <img src={thumbnailUrl} alt=""/>
        </div>
    );
};

export default Photo;