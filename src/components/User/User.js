import React from 'react';

import css from './User.module.css'
import {Link} from "react-router-dom";

const User = ({user}) => {

    const {id,name, username} = user;

    return (
        <div className={css.user_wrap}>
            {name} - {username} <Link state={user} to={id.toString()}>details</Link>
        </div>
    );
};

export default User;