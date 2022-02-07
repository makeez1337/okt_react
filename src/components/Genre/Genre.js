import React from 'react';

import css from './Genre.module.css'

const Genre = ({genre:{name,id,isActive}}) => {

    return (
        <div>
            <h5 className={`${css.genre}`}>{name}</h5>
        </div>
    );
};

export {Genre};