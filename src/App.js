import {Route,Routes,Navigate} from "react-router-dom";

import './App.css';
import {CarsPage, CommentsPage, HomePage, PostsPage, UsersPage} from "./pages";



function App() {


    return (

        <Routes>
            <Route path={'/'} element={<HomePage/>}>

                <Route index element={<Navigate to={'cars'}/>}/>

                <Route path={'cars'} element={<CarsPage/>}/>
                <Route path={'users'} element={<UsersPage/>}/>
                <Route path={'comments'} element={<CommentsPage/>}/>
                <Route path={'posts'} element={<PostsPage/>}/>


            </Route>
        </Routes>

    );
}

export default App;
