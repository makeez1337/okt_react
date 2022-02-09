import React from 'react';

import logo from '../../images/user_logo/user_logo.png'
import css from './UserInfo.module.css'

const UserInfo = () => {
    return (
        <div className={css.user_container}>
            <span className={css.text_style}>UserName</span>
            <img className={css.logo_size} src={logo} alt="UserLogo"/>
        </div>
    );
};

export  {UserInfo};
