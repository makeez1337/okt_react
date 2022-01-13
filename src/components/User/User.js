import React from 'react';

import './User.css'

const User = (props) => {
    const {item: {id,name, username, email}} = props;

    return (
        <div className={'user_wrap'}>
            {id} {name} -- {username} -- {email}
        </div>
    );
};

export default User;