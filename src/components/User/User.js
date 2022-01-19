import React from 'react';

import css from './User.module.css'
import {Link} from "react-router-dom";

const User = ({user}) => {

    const {id,name, username} = user;

    return (
        <div className={css.user_wrap}>
            <div className={css.user_name}>{name} - {username}</div>
            <div><Link state={user} to={id.toString()}>details</Link></div>
            <div><Link to={'albums/'+id.toString()}>albums</Link></div>
        </div>
    );
};

export default User;