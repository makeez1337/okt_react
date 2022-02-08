import {useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {getMovieThunk} from "../../store";
import {MovieListCard} from "../MovieListCard/MovieListCard";
import css from './MovieList.module.css'
import {paginator} from "../../utils";

const MovieList = () => {

    const {pageId} = useParams();

    const dispatch = useDispatch();

    const {movies, totalPages} = useSelector(state => state.movieReducer);

    useEffect(() => {
        dispatch(getMovieThunk({page: pageId}));
    }, [pageId])

    const paginationArr = [];

    const pageIdNumber = +pageId;

    paginator(pageIdNumber, paginationArr, totalPages);


    return (
        <div className={css.movies_wrap}>

            {movies && movies.map(movie => <MovieListCard movie={movie} key={movie.id}/>)}

            <div className={css.pagination}>
                {
                    paginationArr.length !== 0 && paginationArr.map((val, index) => {
                        return val === pageIdNumber ?
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