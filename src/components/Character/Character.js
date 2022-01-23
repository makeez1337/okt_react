import React from 'react';

import css from './Character.module.css'

const Character = ({character}) => {

    const {name, status, gender, origin, image} = character;

    return (
        <div className={css.wrap}>
            <div><span className={css.fw700}>Name</span>: <span className={`${css.fw700} ${css.firebrick}`}>{name}</span></div>
            <div><span className={css.fw700}>Status</span>: <span className={`${css.fw700} ${css.firebrick}`}>{status}</span></div>
            <div><span className={css.fw700}>Gender</span>: <span className={`${css.fw700} ${css.firebrick}`}>{gender}</span></div>
            <div><span className={css.fw700}>Origin</span>: <span className={`${css.fw700} ${css.firebrick}`}>{origin.name}</span></div>
            <img src={image} alt=""/>
        </div>
    );
};

export default Character;