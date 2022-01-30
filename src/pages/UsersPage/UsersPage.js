import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllUsers} from "../../store";
import {User} from "../../components";

const UsersPage = () => {

    const {users,status,error} = useSelector(state => state['userReducer']);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllUsers());
    },[])

    console.log(users);

    return (
        <div>
            {users.length !== 0 && users.map(val => <User key={val.id} user={val}/>)}
            {status === 'rejected' && <h1>{error}</h1>}
            {status === 'pending' && <h1>LOADING</h1>}
        </div>
    );
};

export {UsersPage};