import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {postService} from "../../services/post.service";
import UserPost from "../UserPost/UserPost";
import css from './UsersPosts.module.css'

const UserPosts = () => {

    const params = useParams();
    const userId = params.id;

    const [userPosts, setUserPosts] = useState([]);

    useEffect(()=>{
    postService.getByUserId(userId).then(res => setUserPosts(res));
    },[])

    return (
        <div className={css.posts_wrap}>
            {
                userPosts.map(res => <UserPost post={res} key={res.id}/>)
            }
        </div>
    );
};

export default UserPosts;