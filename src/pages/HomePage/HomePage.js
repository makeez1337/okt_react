import React from 'react';
import {Outlet} from "react-router-dom";

import {Header} from "../../components";

const HomePage = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {HomePage};