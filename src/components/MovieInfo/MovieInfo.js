import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {Header} from "../Header/Header";
import css from './MovieInfo.module.css'
import {getGenreNames} from "../../utils";
import {getVideoThunk} from "../../store";

const MovieInfo = () => {

    const {state} = useLocation();
    const dispatch = useDispatch();
    const {videos} = useSelector(prev => prev['movieReducer']);
    const {movieId} = useParams();

    const [videoURL, setVideoURL] = useState('');


    const {
        movie: {
            id,
            backdrop_path,
            genre_ids,
            original_language,
            overview,
            release_date,
            original_title
        }
    } = state;

    const {genres} = state;

    const background = `https://image.tmdb.org/t/p/original${backdrop_path}`;

    const backgroundStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
    }

    const genresNamesArr = [];

    getGenreNames(genres, genre_ids, genresNamesArr);

    const genreNames = genresNamesArr.toString();


    useEffect(() => {
        dispatch(getVideoThunk({id}));
    }, [id]);


    useEffect(()=>{
        if (videos.length) {
            const YOUTUBE_KEY = videos[0].key;
            setVideoURL(`http://www.youtube.com/embed/${YOUTUBE_KEY}`);
        }
    },[movieId,id])

    console.log(videoURL);

    return (
        <div>
            <Header/>
            <div style={backgroundStyle}>
                <div className={css.movie_info}>
                    <div className={css.title_wrap}><span className={css.title}>{original_title}</span></div>
                    <div className={css.release_wrap}>{release_date}, language: <span
                        className={css.clr_orng}>{original_language}</span></div>
                    <div className={css.genres_wrap}>Genres: <span className={css.clr_orng}>{genreNames}</span></div>
                    <div className={css.overview_wrap}><span className={css.overview}>Overview: <span
                        className={css.clr_orng}>{overview}</span></span></div>
                    {videoURL &&
                        <div className={css.iframe_wrap}>
                        <iframe width="900" height="650" src={videoURL}
                                frameBorder="0" allowFullScreen/>
                    </div>}
                </div>
            </div>
        </div>
    );
};

export {MovieInfo};