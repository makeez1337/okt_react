import React from 'react';

import css from './EpisodesPage.module.css'
import Episodes from "../../components/Episodes/Episodes";

const EpisodesPage = () => {




    return (
        <div>
            <div className={css.h1_wrap}>
                <h1>Rick and Morty episodes</h1>
            </div>
            <div className={css.episodes_background}>
                <div className={css.episodes_wrap}>
                    <Episodes/>
                </div>
            </div>
        </div>
    );
};

export default EpisodesPage;