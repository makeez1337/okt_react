import React from 'react';
import {useNavigate} from "react-router-dom";

import css from './Album.module.css'

const Album = ({album}) => {

    const {userId, id, title} = album;

    const navigate = useNavigate();

    return (
        <div className={css.album_style}>
            <div>UserId: {userId}</div>
            <div>Id: {id}</div>
            <div>Title: {title}</div>
            <button onClick={() => navigate('photos/'+id)}>Photos</button>
        </div>
    );
};

export default Album;