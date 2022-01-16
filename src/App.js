import './App.css';
import Cars from "./components/Cars/Cars";
import Forms from "./components/Form/Forms";
import {useState} from "react";
import FormDelete from "./components/FormDelete/FormDelete";
import FormUpdate from "./components/FormUpdate/FormUpdate";


function App() {

    const [trigger, setTrigeer] = useState([]);

    const update = data => {
        setTrigeer(data);
    }

    const [deleteTrigger, setDeleteTrigger] = useState([]);

    const updateDelete = data => {
        setDeleteTrigger(data);
    }

    const [updateTrigger, setUpdateTrigger] = useState(null);

    const patchUser = data => {
        setUpdateTrigger(data);
    }


    return (
        <div className="App">

            <div className={'forms_wrap'}>
                <Forms update={update}/>
                <FormDelete updateDelete={updateDelete}/>
                <FormUpdate patchUser={patchUser}/>
            </div>

            <Cars trigger={trigger} deleteTrigger={deleteTrigger} updateTrigger={updateTrigger}/>

        </div>);
}

export default App;
