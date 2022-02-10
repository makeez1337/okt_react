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
    const {movieId} = useParams();

    const {videos} = useSelector(prev => prev['movieReducer']);
    const {darkMode} = useSelector(state => state['darkmodeReducer']);

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

        if (videos.length) {
            const YOUTUBE_KEY = videos[0]?.key;
            return setVideoURL(`http://www.youtube.com/embed/${YOUTUBE_KEY}`);
        }

        if (!videos.length) {
            setVideoURL('');
        }
    }, [id, videoURL, +movieId, videos.length, original_title, videos]);


    return (
        <div>
            <Header/>
            <div style={backgroundStyle}>
                <div className={css.movie_info}>

                    <div className={css.title_wrap}><span className={darkMode ?
                        `${css.title} ${css.darkModeKey}`
                        :
                        `${css.title}`}>{original_title}</span></div>
                    <div className={darkMode ?
                        `${css.release_wrap} ${css.darkModeKey}`
                        :
                        `${css.release_wrap}`}>{release_date},
                        <span className={darkMode ?
                            `${css.darkModeKey}`
                            :
                            ``}>
                            language:
                        </span>
                        <span className={darkMode ?
                            `${css.darkModefff}`
                            :
                            `${css.clr_orng}`}>
                            {original_language}
                        </span>
                    </div>

                    <div className={darkMode ?
                        `${css.genres_wrap} ${css.darkModeKey}`
                        :
                        `${css.genres_wrap}`}>Genres:
                        <span className={darkMode ? `${css.darkModefff}`
                            :
                            `${css.clr_orng}`}>
                            {genreNames}
                        </span>
                    </div>

                    <div className={darkMode ? `${css.overview_wrap} ${css.darkModeKey}`
                        :
                        `${css.overview_wrap}`}>
                        <span className={css.overview}>Overview: <span
                        className={darkMode ? `${css.darkModefff}`
                            :
                            `${css.clr_orng}`}>
                            {overview}
                        </span>
                        </span>
                    </div>

                    <div className={css.iframe_wrap}>
                        <iframe width="700" height="500" src={videoURL}
                                frameBorder="0" allowFullScreen/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {MovieInfo};