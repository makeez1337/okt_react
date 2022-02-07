import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getGenresThunk} from "../../store";
import movieReducer from "../../store/slices/movie.slice";
import {Genre} from "../Genre/Genre";
import css from './Genres.module.css'


const Genres = () => {

    const dispatch = useDispatch();

    const {genres} = useSelector(state => state.movieReducer);

    useEffect(()=>{
        dispatch(getGenresThunk());
    },[])



    return (
        <div className={css.genres_wrap}>
            {
                genres.genres && genres.genres.map(genre => <Genre genre={genre} key={genre.id}/>)
            }
        </div>
    );
};

export {Genres};