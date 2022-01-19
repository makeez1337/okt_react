import React, {useEffect, useState} from 'react';
import {useLocation, useParams, useNavigate, Outlet} from "react-router-dom";

import css from './UserDetail.module.css'
import {userService} from "../../services/user.service";

const UserDetails = () => {

    const [userDetail, setUserDetail] = useState(null);
    const [errRequest, setErrRequest] = useState(null);

    const {id: parId} = useParams();


    const {state} = useLocation();

    const navigate = useNavigate();


    useEffect(() => {
        if (state) {
            setErrRequest(null);
            setUserDetail(state);
            return;
        }
        userService.getById(parId).then(res => setUserDetail({...res})).catch(err => setErrRequest(err));
    }, [parId])


    return (

        <div>
            {userDetail && (<div className={css.detail_wrap}>
                    <h1>UserDetails</h1>
                    <div className={css.detail_style}>Id: {userDetail.id}</div>
                    <div className={css.detail_style}>Name: {userDetail.name}</div>
                    <div className={css.detail_style}>Username: {userDetail.username}</div>
                    <div className={css.detail_style}>Email: {userDetail.email}</div>
                    <div className={css.detail_style}>Phone: {userDetail.phone}</div>
                    <div className={css.detail_style}>Website: {userDetail.website}</div>
                    <div className={css.btn_wrap}>
                        <button onClick={() => navigate(`postsId`)}
                                className={`${css.detail_style} ${css.btn_style}`}>UserPosts
                        </button>
                    </div>
                </div>
            )}
            {
                errRequest && (
                    <div className={css.error}>
                        <div>Such user</div>
                        <div>don't exist</div>
                    </div>
                )
            }
            {userDetail && <Outlet/>}
        </div>

    );
};

export default UserDetails;