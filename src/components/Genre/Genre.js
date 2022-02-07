import React from 'react';

import css from './Genre.module.css'

const Genre = ({genre:{name,id}}) => {

    return (
        <div className={css.genre}>
            <h5>{name}</h5>
        </div>
    );
};

export {Genre};