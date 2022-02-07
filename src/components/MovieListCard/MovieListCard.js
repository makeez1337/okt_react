import React, {useEffect, useState} from 'react';

import {PosterPreview} from "../PosterPreview/PosterPreview";
import css from './MovieListCard.module.css'

const MovieListCard = ({movie}) => {

    const [style, setStyle] = useState({display: 'none'});

    const {original_title, id, backdrop_path, release_date, vote_average, original_language} = movie;

    const imgURL = 'https://image.tmdb.org/t/p/w400' + backdrop_path;

    return (
        <div className={css.movie_card}
             onMouseEnter={() => setStyle({display: 'block'})}
             onMouseLeave={() => setStyle({display: 'none'})}
        >
            <span className={css.title_style}>{original_title}</span>
            <PosterPreview movie={movie} img={imgURL}/>
            <div className={css.preview} style={style}>
                <div><span className={css.text_bfr_details}>Release:</span> <span className={css.text_details}>{release_date}</span></div>
                <div><span className={css.text_bfr_details}>Rate:</span> <span className={css.text_details}>{vote_average}</span></div>
                <div><span className={css.text_bfr_details}>Language:</span> <span className={css.text_details}>{original_language}</span></div>
                <button className={css.btn_style}>DETAILS</button>
            </div>
        </div>
    );
};

export {MovieListCard};