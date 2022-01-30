import {Route,Routes,Navigate} from "react-router-dom";

import './App.css';
import {CarsPage, HomePage} from "./pages";



function App() {


    return (

        <Routes>
            <Route path={'/'} element={<HomePage/>}>

                <Route index element={<Navigate to={'/cars'}/>}/>

                <Route path={'/cars'} element={<CarsPage/>}/>


            </Route>
        </Routes>

    );
}

export default App;
