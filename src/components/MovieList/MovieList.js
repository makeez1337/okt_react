import {useEffect} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {getMovieThunk} from "../../store";
import {MovieListCard} from "../MovieListCard/MovieListCard";
import css from './MovieList.module.css'
import {moviePaginator, movieFilterPaginator} from "../../utils";

const MovieList = () => {

    const {pageId} = useParams();

    const dispatch = useDispatch();

    const {movies, totalPages, totalFilteredPages, activeGenres} = useSelector(state => state.movieReducer);

    const navigate = useNavigate();

    useEffect(() => {
        if (!activeGenres.length) {
            dispatch(getMovieThunk({page: pageId}));
            navigate(`/movie/page=${pageId}`)
        }
    }, [pageId, activeGenres])


    const paginationArr = [];

    const pageIdNumber = +pageId;

    totalFilteredPages === null ?
        moviePaginator(pageIdNumber, paginationArr, totalPages)
        :
        movieFilterPaginator(pageIdNumber, paginationArr, totalFilteredPages);


    return (
        <div>
            <div className={css.movies_wrap}>

                {movies && movies.map(movie => <MovieListCard movie={movie} key={movie.id}/>)}
            </div>

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