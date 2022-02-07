import {Routes, Route} from "react-router-dom";

import MoviesPage from "./pages/MoviesPage/MoviesPage";

function App() {

    return (
        <Routes>
            <Route path={'/movie/page=:pageId'} element={<MoviesPage/>}/>

        </Routes>
    );
}

export default App;
