import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllComments} from "../../store";
import {Comment} from "../../components";
import css from './CommentsPage.module.css'

const CommentsPage = () => {

    const {comments,status,error} = useSelector(state => state['commentReducer']);

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAllComments());
    },[])



    return (
        <div className={css.comments_wrap}>
            {comments && comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
            {status === 'rejected' && <h1>{error}</h1>}
            {status === 'pending' && <h1>Loading</h1>}
        </div>
    );
};

export {CommentsPage};