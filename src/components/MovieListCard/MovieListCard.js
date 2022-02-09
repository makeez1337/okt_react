import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";

import {PosterPreview} from "../PosterPreview/PosterPreview";
import css from './MovieListCard.module.css'
import star from '../../images/star_rating/star.png'
import {movieCardPreview} from "../../utils";

const MovieListCard = ({movie}) => {

    const [style, setStyle] = useState({display: 'none'});

    const [brightness, setBrightness] = useState({filter: 'brightness(100%)'});

    const navigate = useNavigate();


    const {
        original_title,
        id,
        backdrop_path,
        release_date,
        vote_average,
        original_language,
        poster_path,
        overview
    } = movie;


    const substrOverview = movieCardPreview(overview);

    const imgURL = `https://image.tmdb.org/t/p/w400${poster_path}`;

    const onMouseEnter = () => setStyle({display: 'block'});
    const onMouseLeave = () => setStyle({display: 'none'});

    const brightnessDark = () => setBrightness({filter: 'brightness(40%)', height: '100%'});
    const brightnessDefault = () => setBrightness({filter: 'brightness(100%)'});

    return (
        <Link state={movie} to={`/movie/${id}`}>
            <div className={css.movie_card}
                 onMouseEnter={onMouseEnter}
                 onMouseLeave={onMouseLeave}
            >
                <span className={css.title_style}>{original_title}</span>
                <div style={brightness}><PosterPreview movie={movie} img={imgURL}/></div>

                <div
                    onMouseEnter={brightnessDark}
                    onMouseLeave={brightnessDefault}
                    className={css.preview} style={style}>

                    <div><span className={css.text_bfr_details}>Release:</span> <span
                        className={css.text_details}>{release_date}</span></div>

                    <div>
                        <span className={css.text_bfr_details}>Rate:</span>
                        <span className={css.text_details}>{vote_average}</span>
                        <span className={css.star}><img src={star} alt=""/></span>
                    </div>

                    <div><span className={css.text_bfr_details}>Language:</span> <span
                        className={css.text_details}>{original_language}</span></div>

                    <div className={css.overview}>
                        <span className={css.text_bfr_details}>Overview:</span> <span className={css.text_details}>{substrOverview}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export {MovieListCard};