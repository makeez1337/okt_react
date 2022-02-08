import React from 'react';

import css from './Genre.module.css'
import {useDispatch} from "react-redux";
import {addGenre} from "../../store";

const Genre = ({genre: {name, id, isActive}}) => {

    const dispatch = useDispatch();


    return (
        <div>
            <h5
                onClick={() => {
                    dispatch(addGenre(id));
                }}
                className={`${isActive ? css.active : css.genre}`}>{name}</h5>
        </div>
    );
};

export {Genre};