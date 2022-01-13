import React, {useEffect, useState} from 'react';

import {userService} from "../../services/user.service";
import User from "../User/User";
import UserDetails from "../UserDetails/UserDetails";
import './Users.css'



const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll()
            .then(value => setUsers(value));
    }, [])

    const [user, setUser] = useState(null);

    const getUserId = (id) => {
        userService.getById(id)
            .then(value => setUser(value));
    }



    return (
        <div className={'users_and_details_wrap'}>
            <div className={'users_wrap'}>
                {
                    users.map(value => {
                        return <User key={value.id} item={value} getUserId={getUserId} user={user}/>
                    })
                }
            </div>
            <div className={'details_wrap'}>
                { user && <UserDetails user={user} setUser={setUser}/>}
            </div>
        </div>
    )
};

export default Users;