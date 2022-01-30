import React from 'react';

import css from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={css.header_wrap}>
                <NavLink to={'cars'}>
                    CarsPage
                </NavLink>
                <NavLink to={'users'}>
                    UsersPage
                </NavLink>
                <NavLink to={'comments'}>
                    CommentsPage
                </NavLink>
                <NavLink to={'posts'}>
                    PostPage
                </NavLink>

        </div>
    );
};

export {Header};