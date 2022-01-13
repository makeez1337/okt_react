import React, {useEffect, useState} from 'react';

import {userServices} from "../../services/user.services";
import User from "../User/User";
import FilterForm from "../FilterForm/FilterForm";

const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        userServices.getAll()
            .then(value => setUsers([...value]));
    }, [])


    return (
        <div>
            <FilterForm setUsers={setUsers} users={users}/>
            {
                users.map(value => {
                    return <User key={value.id} item={value}/>
                })
            }
        </div>
    );
};

export default Users;