import React from 'react';

import {Genres, Header, MovieList} from "../../components";
import css from './MoviesPage.module.css'

const MoviesPage = () => {

    return (
        <div className={css.container}>

            <Header/>

            <div className={css.main_menu_wrap}>
                <Genres/>
                <MovieList/>
            </div>

        </div>
    );
};

export {MoviesPage};
