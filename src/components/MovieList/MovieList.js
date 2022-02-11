import {useEffect} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {cancelVideos, getMovieThunk} from "../../store";
import {MovieListCard} from "../MovieListCard/MovieListCard";
import css from './MovieList.module.css'
import {moviePaginator, movieFilterPaginator} from "../../utils";

const MovieList = () => {

    const {pageId} = useParams();

    const dispatch = useDispatch();

    const {movies, totalPages, totalFilteredPages, activeGenres,videos,moviesStatus,
        moviesErr, filteredGenresStatus,filteredGenresErr} = useSelector(state => state.movieReducer);
    const {darkMode} = useSelector(state => state['darkmodeReducer']);

    const navigate = useNavigate();

    useEffect(() => {
        if (!activeGenres.length) {
            dispatch(getMovieThunk({page: pageId}));
            navigate(`/movie/page=${pageId}`)
        }
    }, [+pageId, activeGenres])


    const pageIdNumber = +pageId;

    const paginationArr = [];

    totalFilteredPages !== null ?
        movieFilterPaginator(pageIdNumber, paginationArr, totalFilteredPages)
        :
        moviePaginator(pageIdNumber, paginationArr, totalPages)

    useEffect(() => {
        dispatch(cancelVideos());
    }, [pageId]);




    return (
        <div>

            <div className={darkMode ? `${css.movies_wrap} ${css.darkMode}` : `${css.movies_wrap}`}>

                {movies && movies.map(movie => <MovieListCard movie={movie} key={movie.id}/>)}
                {moviesStatus === 'loading' ? <h2 style={darkMode ? {color:'white'} : {}}>Loading...</h2> : ''}
                {moviesStatus === 'rejected' ? <h2 style={darkMode ? {color:'white'} : {}}>{moviesErr}</h2> : ''}
                {filteredGenresStatus === 'loading' ? <h2 style={darkMode ? {color:'white'} : {}}>Loading...</h2> : ''}
                {filteredGenresStatus === 'rejected' ? <h2 style={darkMode ? {color:'white'} : {}}>{filteredGenresErr}</h2> : ''}
            </div>

            <div className={darkMode ? `${css.pagination} ${css.darkMode}` :  `${css.pagination}`}>
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