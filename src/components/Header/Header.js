import React from 'react';
import {Link} from "react-router-dom";


import css from './Header.module.css';
import {UserInfo} from "../UserInfo/UserInfo";
import {useDispatch, useSelector} from "react-redux";
import {removeActiveGenres} from "../../store";
import {SwitchToggle} from "../SwitchToggle/SwitchToggle";


const Header = () => {

    const dispatch = useDispatch();

    const onClick = () => dispatch(removeActiveGenres());

    const {darkMode} = useSelector(state => state['darkmodeReducer']);



    return (
        <div className={darkMode ? `${css.header_style_dark}`:`${css.header_style}`}>

            <Link onClick={onClick} to={'/movie/page=1'}><span className={css.nav}>MOVIES PAGE</span></Link>
            <SwitchToggle/>
            <UserInfo/>

        </div>
    );
};

export {Header};