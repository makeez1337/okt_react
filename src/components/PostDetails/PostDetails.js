import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate, useParams, Outlet, useSearchParams} from "react-router-dom";

import css from './PostDetails.module.css'
import {postService} from "../../services/post.service";

const PostDetails = () => {

    const [postDetails, setPostDetails] = useState(null);
    const {state} = useLocation();

    const params = useParams();

    const [errRequest, setErrRequest] = useState(null);


    useEffect(() => {
        if (state) {
            setErrRequest(null);
            setPostDetails({...state});
            return;
        }
        postService.getById(params.id).then(res => {
            setErrRequest(null);
            setPostDetails({...res})
        }).catch(err => setErrRequest(err));
    }, [state]);

    const navigate = useNavigate();



    return (
        <div>
            {postDetails &&
                <div className={css.post_detail}>
                    <h1>PostDetails</h1>
                    <div>Id: {postDetails.id}</div>
                    <div>Title: {postDetails.title}</div>
                    <div className={css.body_text_style}>Body: {postDetails.body}</div>
                    <button onClick={() => navigate(`comment/${postDetails.id}`)} className={css.btn_style}>Post
                        Comments
                    </button>
                </div>

            }
                <Outlet/>
            {
                errRequest &&
                <div className={css.err_style}>
                    <h1>Post doesnt exists</h1>
                </div>
            }
        </div>
    );
};

export default PostDetails;