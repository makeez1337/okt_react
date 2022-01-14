import './App.css';
import Users from "./components/Users/Users";
import React, {useEffect, useState} from "react";
import {userServices} from "./services/user.services";
import FilterForm from "./components/FilterForm/FilterForm";

function App() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        userServices.getAll()
            .then(value => setUsers([...value]));
    }, [])

    return (
        <div className="App">
            <FilterForm setUsers={setUsers} users={users}/>
            <Users users={users}/>
        </div>
    );
}

export default App;
