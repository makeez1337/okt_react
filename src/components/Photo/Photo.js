import React from 'react';

import css from './Photo.module.css'

const Photo = ({photo}) => {

    const {id,albumId,title, url,thumbnailUrl} = photo;

    return (
        <div className={css.wrap}>
            <div>AlbumId: {albumId}</div>
            <div>Title: {title}, Id: {id}</div>
            <img src={thumbnailUrl} alt=""/>
        </div>
    );
};

export default Photo;