import React, {useState} from 'react';

import {userServices} from "../../services/user.services";


const FilterForm = (props) => {

    const [form, setForm] = useState({name: '', username: '', email: ''});

    const onChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    const {setUsers, users} = props;

    const onSubmit = (e) => {
        e.preventDefault();
        const name = form.name;
        const username = form.username;
        const email = form.email;
        let arrayWithRes = [];

        users.map((value) => {
            if (value.name.includes(name) && value.username.includes(username) && value.email.includes(email)) {
                arrayWithRes.push(value);
            }
        })

        setUsers(arrayWithRes);
    }

    const clearFilters = () => {
        userServices.getAll()
            .then(value => setUsers([...value]));
    }


    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>Name:<input name={'name'} type="text" onChange={onChange}/></label>
                <label>UserName:<input name={'username'} type="text" onChange={onChange}/></label>
                <label>Email:<input name={'email'} type="text" onChange={onChange}/></label>
                <button>Find</button>
                <button onClick={clearFilters}>Clear filters</button>
            </form>
        </div>
    );
};

export default FilterForm;