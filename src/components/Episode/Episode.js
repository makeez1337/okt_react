import React from 'react';
import {Link} from "react-router-dom";

import css from './Episode.module.css'

const Episode = ({episodeDetails}) => {

    const {id,name, air_date, episode,characters} = episodeDetails;

    return (
        <div className={css.episode_style}>
            <div className={css.name_width70}><span className={css.fw700}>{name}</span></div>
            <div className={css.mt_5}><span className={css.fw700}>Air date:</span> <span className={css.describe_style}>{air_date}</span></div>
            <div className={css.mt_5}><span className={css.fw700}>Episode:</span> <span className={css.describe_style}>{episode}</span></div>
            <div className={css.mt_5}>
                <Link state={{characters,name}} to={`/characters/${id}`}>Episode details</Link>
            </div>
        </div>
    );
};

export default Episode;