import React from 'react';

const User = ({user}) => {
    return (
        <div style={{marginLeft:'800px',marginBottom:'50px'}}>
            <div>name:{user.name}</div>
            <div>username:{user.username}</div>
            <div>email:{user.email}</div>
            <div>phone:{user.phone}</div>

        </div>
    );
};

export {User};