import React from 'react';
import {Outlet} from "react-router-dom";

import Posts from "../../components/Posts/Posts";
import css from './PostPage.module.css'

const PostsPage = () => {
    return (
        <div className={css.wrap}>

            <div className={css.posts_wrap}>
                <Posts/>
            </div>

            <div className={css.outlet}>
                <Outlet/>
            </div>
        </div>
    );
};

export default PostsPage;