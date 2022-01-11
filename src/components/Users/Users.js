import React, {useEffect, useState} from 'react';

import UserComponent from '../User/UserComponent'
import {getUsers} from '../../services/getApi'
import './Users.css'

const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(item => {
            setUsers(item);
        })
    }, [])

    return (
        <div className={'user_menu'}>
            <h1 className={'color_gold'}>USERS</h1>
            <div className={'users_wrap'}>
                {
                    users.map(value => {
                        return <UserComponent key={value.id} properties={value}/>
                    })
                }
            </div>
        </div>
    );
};

export default Users;