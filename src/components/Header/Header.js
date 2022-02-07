import React from 'react';

import css from './Header.module.css';
import {UserInfo} from "../UserInfo/UserInfo";
import {Link} from "react-router-dom";


const Header = () => {
    return (
        <div className={css.header_style}>
            <Link to={'/movie/page=1'}>MOVIES PAGE</Link>
            <UserInfo/>
        </div>
    );
};

export {Header};