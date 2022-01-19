import React from 'react';

import css from './HomePage.module.css'
import {useNavigate} from "react-router-dom";

const HomePage = () => {


    return (
        <div className={css.wrap}>
            <h1>MAKE A CHOICE</h1>
        </div>
    );
};

export {HomePage};