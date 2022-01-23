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
                <Route path={'page/1'} element={<EpisodesPage page={1}/>}/>
                <Route path={'page/2'} element={<EpisodesPage page={2}/>}/>
                <Route path={'page/3'} element={<EpisodesPage page={3}/>}/>

                <Route path={'characters/:id'} element={<CharactersPage/>}/>
            </Route>

        </Routes>

    );
}

export default App;
