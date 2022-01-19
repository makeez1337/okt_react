import React from 'react';
import {Outlet} from "react-router-dom";

import Users from "../../components/Users/Users";
import css from './UsersPage.module.css'

const UsersPage = () => {
    return (
        <div className={css.main_wrap}>

            <div className={css.users_wrap}>
                <Users/>
            </div>

            <div className={css.outlet}>
                <Outlet/>
            </div>

        </div>
    );
};

export {UsersPage};