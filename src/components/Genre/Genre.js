import React from 'react';

import css from './Genre.module.css'
import {useDispatch} from "react-redux";
import {addGenre} from "../../store";

const Genre = ({genre: {name, id, isActive}}) => {

    const dispatch = useDispatch();


    return (
        <div onClick={() => {
            dispatch(addGenre(id));
            console.log(isActive);
        }}>
            <h5 className={`${css.genre}`}>{name}</h5>
        </div>
    );
};

export {Genre};