import './App.css';

import Users from "./components/Users/Users";
import Forms from "./components/Forms/Forms";
import {useEffect, useState} from "react";
import {getAllUsers} from "./services/axios";

function App() {

    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(() => {
        getAllUsers().then(value => {
            setUsers([...value])
            setFilteredUsers([...value]);
        });
    }, [])

    const getFilter = (data) => {
        let filterArray = [...users];
        if (data.name) {
            filterArray = filterArray.filter(value => value.name.toLowerCase().includes(data.name.toLowerCase()));
        }
        if (data.email) {
            filterArray = filterArray.filter(value => value.email.toLowerCase().includes(data.email.toLowerCase()));
        }
        if (data.username) {
            filterArray = filterArray.filter(value => value.username.toLowerCase().includes(data.username.toLowerCase()));
        }
        setFilteredUsers(filterArray);
    }

    return (
        <div className="App">
            <Forms getFilter={getFilter}/>
            <Users users={filteredUsers}/>
        </div>
    );
}

export default App;
