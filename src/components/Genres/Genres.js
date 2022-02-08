import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getGenresThunk, getMoviesByGenre, getMovieThunk} from "../../store";
import movieReducer from "../../store/slices/movie.slice";
import {Genre} from "../Genre/Genre";
import css from './Genres.module.css'
import {movieService} from "../../services/movie.service";
import {useNavigate, useParams} from "react-router-dom";


const Genres = () => {

    const dispatch = useDispatch();

    const {genres, activeGenres} = useSelector(state => state.movieReducer);

    const {pageId} = useParams();

    useEffect(() => {
        dispatch(getGenresThunk());
    }, [])

    const navigate = useNavigate();

    useEffect(() => {
        if (activeGenres.length) {
            const genresIds = [];
            const genresName = [];

            for (const element of activeGenres) {
                genresIds.push(element.id);
                genresName.push(element.name);
            }

            const genreIdsStr = genresIds.toString();
            const genreNamesStr = genresName.toString().toLowerCase();

            dispatch(getMoviesByGenre({genres:genreIdsStr,page:+pageId}));

            navigate(`/movie/page=${pageId}/with_genres=${genreNamesStr}`);
        }
    }, [activeGenres.length,+pageId])


    return (
        <div className={css.genres_wrap}>
            {
                genres && genres.map(genre => <Genre genre={genre} key={genre.id}/>)
            }
        </div>
    );
};

export {Genres};
