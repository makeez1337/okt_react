import {useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {getMovieThunk} from "../../store";
import {MovieListCard} from "../MovieListCard/MovieListCard";
import css from './MovieList.module.css'

const MovieList = () => {

    const {pageId} = useParams();

    const dispatch = useDispatch();

    const {movies, totalPages} = useSelector(state => state.movieReducer);

    useEffect(() => {
        dispatch(getMovieThunk({page: pageId}));
    }, [pageId])

    const paginationArr = [];

    if (pageId < 13) {
        for (let i = 1; i <= 13; i++) {
            paginationArr.push(i);
        }
    }
    if (pageId >= 13 && pageId <= 494) {
        for (let i = +pageId - 6; i <= +pageId + 6; i++) {
            paginationArr.push(i);
        }
    }
    if (+pageId > 494) {
        for (let i = 488; i <= +totalPages; i++) {
            paginationArr.push(i);
        }
    }


    console.log(paginationArr);

    return (
        <div className={css.movies_wrap}>
            {movies && movies.map(movie => <MovieListCard movie={movie} key={movie.id}/>)}
            <div>{
                paginationArr.length !== 0 && paginationArr.map((val) => {
                    return <Link to={`/movie/page=${val}`}>
                        <button>{val}</button>
                    </Link>
                })
            }</div>
        </div>


    );
};

export {MovieList};