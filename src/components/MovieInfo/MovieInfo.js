import React from 'react';
import {useLocation} from "react-router-dom";

import {Header} from "../Header/Header";
import css from './MovieInfo.module.css'

const MovieInfo = () => {

    const {state} = useLocation();
    console.log(state);

    const {backdrop_path} = state

    const background = `https://image.tmdb.org/t/p/original${backdrop_path}`;

    const backgroundStyle = {
        backgroundImage:  `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        filter: 'brightness(60%)'

    }


    return (
        <div>
            <Header/>
            <div  style={backgroundStyle} className={css.container}>

                <div className={css.movie_info}>

                </div>

                <div className={css.movie_trailer}>

                </div>

            </div>
        </div>
    );
};

export {MovieInfo};