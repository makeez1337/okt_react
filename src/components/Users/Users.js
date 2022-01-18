import React, {useEffect, useState} from 'react';

import {userService} from "../../services/user.service";
import User from "../User/User";
import css from './Users.module.css'


const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(val => setUsers([...val]));
    }, [])

    return (
        <div>
            <div>
                {
                    users.map(user => <User user={user} key={user.id}/>)
                }
            </div>
        </div>
    );
};

export default Users;