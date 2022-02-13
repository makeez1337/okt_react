import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams, useSearchParams} from "react-router-dom";

import {getGenresThunk, getMoviesByGenre} from "../../store";
import movieReducer from "../../store/slices/movie.slice";
import {Genre} from "../Genre/Genre";
import css from './Genres.module.css'


const Genres = () => {

    const dispatch = useDispatch();

    const {genres, activeGenres, genresStatus, genresErr, movies} = useSelector(state => state['movieReducer']);

    const {darkMode} = useSelector(state => state['darkmodeReducer']);

    const {pageId} = useParams();
    const [searchParams] = useSearchParams();

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

            searchParams.set('with_genres', activeGenreNamesStr);
            let search_params;

            for (const entry of searchParams.entries()) {
                const [param, value] = entry;
                search_params = param.concat(`=${value}`);
            }

            navigate(`/movie/page=${pageId}?${search_params}`);
        }
    }, [activeGenres.length, +pageId, genresStatus, activeGenres])


    return (
        <div className={darkMode ? `${css.genres_wrap} ${css.darkMode}` : `${css.genres_wrap}`}>
            {
                genres && genres.map(genre => <Genre genre={genre} key={genre.id}/>)
            }
            {genresStatus === 'loading' ? <h1>Loading...</h1> : ''}
            {genresStatus === 'rejected' ? <h1>{genresErr}</h1> : ''}
        </div>
    );
};

export {Genres};
