import {Routes, Route,Navigate} from "react-router-dom";

import {MoviesPage} from "./pages";
import {MovieInfo} from "./components";


function App() {

    return (
        <Routes>
            <Route index element={<Navigate to={'movie/page=1'}/>}/>
            <Route path={'/movie/page=:pageId'} element={<MoviesPage/>}/>

            {/*<Route path={'/movie/page=:pageId?with_genres=:genres'} element={<MoviesPage/>}/>*/}
            <Route path={'/movie/page=:pageId?:queryParams'} element={<MoviesPage/>}/>

            <Route path={'/movie/:movieId'} element={<MovieInfo/>}/>
        </Routes>
    );
}

export default App;
