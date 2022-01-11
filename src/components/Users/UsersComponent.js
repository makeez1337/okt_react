import React from 'react';

import './UsersStyle.css'

const UsersComponent = (props) => {
    let {properties: {name, id, email, address: {street, city}}} = props;
    return (
        <div className={'wrap'}>
            <p>Id: {id};Name - {name}</p>
            <p>Email: {email}</p>
            <p>Address:</p>
            <p>{street}</p>
            <p>{city}</p>
        </div>
    );
};

export default UsersComponent;