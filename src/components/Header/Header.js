import React from 'react';
import {useNavigate} from "react-router-dom";

import css from './Header.module.css'

const Header = () => {

    const navigate = useNavigate();

    return (
        <div className={css.header_wrap}>
            <h5 onClick={()=>navigate('/page/1')}>Rick and Morty</h5>
            <img onClick={()=>navigate('/page/1')} src='http://assets.stickpng.com/images/58f37747a4fa116215a92414.png' alt=""/>
        </div>
    );
};

export default Header;