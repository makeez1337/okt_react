import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";

import {episodeService} from "../../services/episode.service";
import Episode from "../Episode/Episode";
import css from './Episodes.module.css'

const Episodes = () => {

    const [episods, setEpisods] = useState([]);

    const page = useParams();

    const [prevBtnDisable, setPrevBtnDisable] = useState(false);

    const [nextBtnDisable, setNextBtnDisable] = useState(false);

    const [lastPage, setLastPage] = useState(null);


    useEffect(() => {
        episodeService.getByPage(+page.id).then(res => {
            setLastPage(res.info.pages);
            setEpisods([...res.results])
        });
    }, [+page.id])

    useEffect(() => {
        if (+page.id === 1) setPrevBtnDisable(true);
        else setPrevBtnDisable(false);
    }, [+page.id])

    useEffect(() => {
        if (+page.id === lastPage) setNextBtnDisable(true)
        else setNextBtnDisable(false);
    }, [+page.id])

    const arrWithAllPages = []

    for (let i = 1; i <= lastPage; i++) {
        arrWithAllPages.push(i);
    }



    return (
        <div>
            <div className={css.episodes_wrap}>
                {
                    episods.map(episode => <Episode episodeDetails={episode} key={episode.id}/>)
                }
            </div>

            <div className={css.btn_wrap}>
                <Link to={`/page/${+page.id - 1}`}>
                    <button disabled={prevBtnDisable} className={css.btn_style}>Previous page</button>
                </Link>
                {
                    arrWithAllPages.map((val, index) => {
                        if (index + 1 === +page.id) {
                            return <Link key={index} className={css.btn_style} to={`/page/${val}`}><button style={{backgroundColor:'orange'}}>{val}</button></Link>
                        }else {
                            return <Link key={index} className={css.btn_style} to={`/page/${val}`}><button>{val}</button></Link>
                        }
                    })
                }
                <Link to={`/page/${+page.id + 1}`}>
                    <button disabled={nextBtnDisable} className={css.btn_style}>Next page</button>
                </Link>
            </div>

        </div>
    );
};

export default Episodes;