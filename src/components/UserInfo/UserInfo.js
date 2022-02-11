import React from 'react';
import {useSelector} from "react-redux";

import logo from '../../images/user_logo/user_logo.png'
import css from './UserInfo.module.css'

const UserInfo = () => {

    const {darkMode} = useSelector(state => state['darkmodeReducer']);

    return (
        <div className={css.user_container}>
            <span className={darkMode ? `${css.dark_text_style}`:`${css.text_style}`}>UserName</span>
            <img className={css.logo_size} src={logo} alt="UserLogo"/>
        </div>
    );
};

export  {UserInfo};
