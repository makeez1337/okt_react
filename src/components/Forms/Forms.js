import React, {useState} from 'react';

const Forms = ({getFilter}) => {

    const [form, setForm] = useState({name: '', username: '', email: ''});


    const onSubmit = (e) => {
        e.preventDefault();
    }

    const formHandler = (e) => {
        const eventData = {...form, [e.target.name]: e.target.value};
        setForm({...form, ...eventData});
        getFilter(eventData)
    }

    return (
        <div>

            <form onSubmit={onSubmit}>
                <label>Name:<input name={'name'} type="text" value={form.name} onChange={formHandler}/></label>
                <label>UserName:<input name={'username'} type="text" value={form.username} onChange={formHandler}/></label>
                <label>Email:<input name={'email'} type="text" value={form.email} onChange={formHandler}/></label>
            </form>

        </div>
    );
};

export default Forms;