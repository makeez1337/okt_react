import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {postService} from "../../services/post.service";
import Comment from "../Comment/Comment";
import css from './PostComments.module.css'

const PostComments = () => {

    const params = useParams();

    const [comments, setComments] = useState([]);
    console.log(params);

    useEffect(() => {
        postService.getCommentsById(params.id).then(res => setComments(res));
    }, [])


    return (
        <div>

            <div className={css.wrap}>{
                comments.map(res => <Comment comment={res} key={res.id}/>)
            }</div>
            
        </div>
    );
};

export default PostComments;