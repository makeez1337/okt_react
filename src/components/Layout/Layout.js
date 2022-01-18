import React from 'react';
import {Outlet} from 'react-router-dom'

import css from './Layout.module.css'
import Header from "../Header/Header";

const Layout = () => {

    return (
        <div>
            <Header/>

            <div className={css.choose_helper}>CHOOSE BETWEEN USERS OR POSTS</div>

            <Outlet/>
        </div>
    );
};

export default Layout;