import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import css from './Genre.module.css'
import {addGenre} from "../../store";

const Genre = ({genre: {name, id, isActive}}) => {

    const dispatch = useDispatch();

    const {darkMode} = useSelector(state => state['darkmodeReducer']);

    const onClick = () => {
        dispatch(addGenre(id));
    };


    return (
        <div>
            {darkMode ?
                <h5
                    onClick={onClick}
                    className={`${isActive ? `${css.active} ${css.darkMode}` : `${css.genre}`}`}>{name}
                </h5>
                :
                <h5
                    onClick={onClick}
                    className={`${isActive ? css.active : css.genre}`}>{name}
                </h5>
            }
        </div>
    );
};

export {Genre};
