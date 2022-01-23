import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

import {episodeService} from "../../services/episode.service";
import Episode from "../Episode/Episode";
import css from './Episodes.module.css'

const Episodes = ({page}) => {

    const [episods, setEpisods] = useState([]);

    const [prevBtnDisable, setPrevBtnDisable] = useState(false);

    const [nextBtnDisable, setNextBtnDisable] = useState(false);

    useEffect(() => {
        episodeService.getByPage(page).then(res => {
            setEpisods([...res.results])
        });
    }, [page])

    useEffect(()=>{
        if (page === 1) setPrevBtnDisable(true);
        else setPrevBtnDisable(false);
    },[page])

    useEffect(()=>{
        if (page === 3) setNextBtnDisable(true)
        else setNextBtnDisable(false);
    },[page])



    return (
        <div>
            <div className={css.episodes_wrap}>
                {
                    episods.map(episode => <Episode episodeDetails={episode} key={episode.id}/>)
                }

            </div>

            <div className={css.btn_wrap}>
                <Link to={`/page/${page - 1}`}>
                    <button disabled={prevBtnDisable} className={css.btn_style}>Previous page</button>
                </Link>
                <Link to={`/page/${page + 1}`}>
                    <button disabled={nextBtnDisable} className={css.btn_style}>Next page</button>
                </Link>
            </div>

        </div>
    );
};

export default Episodes;