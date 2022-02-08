import {Routes, Route,Navigate} from "react-router-dom";

import {MoviesPage} from "./pages";


function App() {

    return (
        <Routes>
            <Route index element={<Navigate to={'movie/page=1'}/>}/>
            <Route path={'/movie/page=:pageId'} element={<MoviesPage/>}/>
            <Route path={'/movie/page=:pageId/with_genres=:genres'} element={<MoviesPage/>}/>


        </Routes>
    );
}

export default App;
