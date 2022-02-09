import React from 'react';
import {useLocation} from "react-router-dom";

import {Header} from "../Header/Header";
import css from './MovieInfo.module.css'

const MovieInfo = () => {

    const {state} = useLocation();
    console.log(state);
    const {backdrop_path} = state
    console.log(backdrop_path);
    const background = `https://image.tmdb.org/t/p/original${backdrop_path}`;


    return (
        <div>
            <Header/>
            <div className={css.container} style={{
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                height: '100vh'
            }}>
                <div className={css.movie_info}>

                </div>
                <div className={css.movie_trailer}>

                </div>
            </div>
        </div>
    );
};

export {MovieInfo};