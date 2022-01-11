import React, {useEffect, useState} from 'react';

import {getComments} from '../../services/getApi'
import CommentComponent from './CommentComponent'
import './Comments.css'

const Comments = () => {

    const [comment, setComment] = useState([]);

    useEffect(() => {
        getComments().then(comments => {
            setComment(comments);
        })
    }, [])

    return (
        <div className={'comments_menu'}>
            <div className={'header_style'}>
                <h1 className={'color_gold'}>COMMENTS</h1>
            </div>
            <div className={'comments_wrap'}>
                {
                    comment.map(value => {
                        return <CommentComponent properties={value} key={value.id}/>
                    })
                }
            </div>
        </div>
    );
};

export default Comments;