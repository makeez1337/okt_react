import React, {useEffect} from 'react';

import {PosterPreview} from "../PosterPreview/PosterPreview";
import css from './MovieListCard.module.css'

const MovieListCard = ({movie}) => {

    const {original_title,id,backdrop_path} = movie;

    const imgURL = 'https://image.tmdb.org/t/p/w400' + backdrop_path;

    return (
        <div className={css.movie_card}>
            <span className={css.title_style}>{original_title}</span>
            <PosterPreview movie={movie} img={imgURL}/>
        </div>
    );
};

export  {MovieListCard};