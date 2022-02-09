import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";

import {PosterPreview} from "../PosterPreview/PosterPreview";
import css from './MovieListCard.module.css'
import star from '../../images/star_rating/star.png'

const MovieListCard = ({movie}) => {

    const [style, setStyle] = useState({display: 'none'});

    const navigate = useNavigate();


    const {original_title, id, backdrop_path, release_date, vote_average, original_language, poster_path} = movie;

    const imgURL = `https://image.tmdb.org/t/p/w400${poster_path}`

    const onMouseEnter = () => setStyle({display: 'block'});
    const onMouseLeave = () => setStyle({display: 'none'});

    return (
        <div className={css.movie_card}
             onMouseEnter={onMouseEnter}
             onMouseLeave={onMouseLeave}
        >
            <span className={css.title_style}>{original_title}</span>
            <PosterPreview movie={movie} img={imgURL}/>

            <div className={css.preview} style={style}>
                <div><span className={css.text_bfr_details}>Release:</span> <span
                    className={css.text_details}>{release_date}</span></div>

                <div>
                    <span className={css.text_bfr_details}>Rate:</span>
                    <span className={css.text_details}>{vote_average}</span>
                    <span className={css.star}><img src={star} alt=""/></span>
                </div>

                <div><span className={css.text_bfr_details}>Language:</span> <span
                    className={css.text_details}>{original_language}</span></div>

                <Link state={movie} to={`/movie/${id}`}>
                    <button className={css.btn_style}>DETAILS</button>
                </Link>

            </div>
        </div>
    );
};

export {MovieListCard};