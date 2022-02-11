import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";

import {getGenresThunk, getMoviesByGenre} from "../../store";
import movieReducer from "../../store/slices/movie.slice";
import {Genre} from "../Genre/Genre";
import css from './Genres.module.css'


const Genres = () => {

    const dispatch = useDispatch();

    const {genres, activeGenres} = useSelector(state => state['movieReducer']);

    const {darkMode} = useSelector(state => state['darkmodeReducer']);

    const {pageId} = useParams();

    useEffect(() => {
        dispatch(getGenresThunk());
    }, [])

    const navigate = useNavigate();

    useEffect(() => {
        if (activeGenres.length) {

            const activeGenreIds = [];
            const activeGenreNames = [];

            for (const activeGenre of activeGenres) {
                activeGenreIds.push(activeGenre.id);
                activeGenreNames.push(activeGenre.name);
            }

            const activeGenreIdsStr = activeGenreIds.toString();
            const activeGenreNamesStr = activeGenreNames.toString().toLowerCase();

            dispatch(getMoviesByGenre({genres: activeGenreIdsStr, page: +pageId}));

            navigate(`/movie/page=${pageId}/with_genres=${activeGenreNamesStr}`);
        }
    }, [activeGenres.length, +pageId,activeGenres])



    return (
        <div className={darkMode ? `${css.genres_wrap} ${css.darkMode}` : `${css.genres_wrap}`}>
            {
                genres && genres.map(genre => <Genre genre={genre} key={genre.id}/>)
            }
        </div>
    );
};

export {Genres};
