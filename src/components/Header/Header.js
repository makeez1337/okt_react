import React from 'react';
import {NavLink} from "react-router-dom";

import css from './Header.module.css'

const Header = () => {
    return (
        <div>
            <div className={css.header_wrap}>

                <NavLink to={'users'}>Users</NavLink>
                <NavLink to={'posts'}>Posts</NavLink>

            </div>
        </div>
    );
};

export default Header;