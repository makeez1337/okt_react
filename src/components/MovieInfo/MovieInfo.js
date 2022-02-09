import React from 'react';
import {useLocation} from "react-router-dom";

import {Header} from "../Header/Header";
import css from './MovieInfo.module.css'

const MovieInfo = () => {

    const {state} = useLocation();

    const {backdrop_path, genre_ids, original_language, overview, release_date, original_title, vote_average} = state


    const background = `https://image.tmdb.org/t/p/original${backdrop_path}`;

    const backgroundStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
    }

    return (
        <div>
            <Header/>
            <div style={backgroundStyle}>
                <div className={css.movie_info}>
                    <div className={css.header}>{original_title}</div>
                </div>
            </div>
        </div>
    );
};

export {MovieInfo};