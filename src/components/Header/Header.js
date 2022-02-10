import React from 'react';
import {Link} from "react-router-dom";

import css from './Header.module.css';
import {UserInfo} from "../UserInfo/UserInfo";
import {useDispatch} from "react-redux";
import {removeActiveGenres} from "../../store";


const Header = () => {

    const dispatch = useDispatch();

    const onClick = () => dispatch(removeActiveGenres());


    return (
        <div className={css.header_style}>
            <Link onClick={onClick} to={'/movie/page=1'}><span className={css.nav}>MOVIES PAGE</span></Link>
            <UserInfo/>
        </div>
    );
};

export {Header};