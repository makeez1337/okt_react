import {Routes, Route} from "react-router-dom";
import {axiosService} from "./services";
import {useEffect} from "react";

function App() {


    useEffect(()=>{
    axiosService.get('/movie').then(res => res.data).then(res => console.log(res))
    },[])

    return (
        <Routes>


        </Routes>
    );
}

export default App;
