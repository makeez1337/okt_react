import {Routes, Route, Navigate, useLocation} from "react-router-dom";

import './App.css';
import HomePage from "./pages/HomePage/HomePage";
import EpisodesPage from "./pages/EpisodesPage/EpisodesPage";
import CharactersPage from "./pages/CharactersPage/CharactersPage";

function App() {


    return (

        <Routes>

            <Route path={'/'} element={<HomePage/>}>
                <Route index element={<Navigate to={'page/1'}/>}/>
                <Route path={'page/:id'} element={<EpisodesPage/>}/>

                <Route path={'characters/:id'} element={<CharactersPage/>}/>
            </Route>

        </Routes>

    );
}

export default App;
