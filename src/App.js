import {Routes, Route} from "react-router-dom"


import css from './App.module.css'
import Layout from "./components/Layout/Layout";
import UserDetails from "./components/UserDetails/UserDetails";
import UserPosts from "./components/UserPosts/UserPosts";
import PostDetails from "./components/PostDetails/PostDetails";
import PostComments from "./components/PostComments/PostComments";
import {HomePage, PageNotFound, PostsPage, UsersPage} from "./pages";
import Albums from "./components/Albums/Albums";
import Photos from "./components/Photos/Photos";


function App() {

    return (
        <div className={css.main_wrap}>
            <Routes>
                <Route path={'/'} element={<Layout/>}>

                    <Route index element={<HomePage/>}/>

                    <Route path={'users'} element={<UsersPage/>}>
                        <Route path={':id'} element={<UserDetails/>}>
                            <Route path={`postsId/:pId`} element={<UserPosts/>}/>
                        </Route>

                        <Route path={'albums/:id'} element={<Albums/>}>
                            <Route path={'photos/:photoId'} element={<Photos/>}/>
                        </Route>
                    </Route>

                    <Route path={'posts'} element={<PostsPage/>}>
                        <Route path={':id'} element={<PostDetails/>}>
                            <Route path={'comment/:id'} element={<PostComments/>}/>
                        </Route>
                    </Route>

                    <Route path={'*'} element={<PageNotFound/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
