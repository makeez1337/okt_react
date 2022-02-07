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

    if (+pageId < 13) {
        for (let i = 1; i <= 13; i++) {
            paginationArr.push(i);
        }
    }
    if (+pageId >= 13 && +pageId <= 494) {
        for (let i = +pageId - 6; i <= +pageId + 6; i++) {
            paginationArr.push(i);
        }
    }
    if (+pageId > 494) {
        for (let i = 488; i <= +totalPages; i++) {
            paginationArr.push(i);
        }
    }

    console.log(movies);

    return (
        <div className={css.movies_wrap}>

            {movies && movies.map(movie => <MovieListCard movie={movie} key={movie.id}/>)}

            <div className={css.pagination}>
                {
                    paginationArr.length !== 0 && paginationArr.map((val,index) => {
                        return val === +pageId ?
                            <Link key={index} to={`/movie/page=${val}`}>
                                <button className={`${css.btn_style} ${css.isActive}`}>{val}</button>
                            </Link>
                            :
                            <Link key={index} to={`/movie/page=${val}`}>
                                <button className={css.btn_style}>{val}</button>
                            </Link>
                    })
                }
            </div>

        </div>


    );
};

export {MovieList};