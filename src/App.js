import './App.css';
import {useEffect, useState} from "react";
import {getUsers} from "./services/getUsers";
import UsersComponent from "./components/Users/UsersComponent";
import {getPosts} from "./services/getPosts";
import PostComponent from "./components/Posts/PostComponent";
import {getComments} from "./services/getComments";
import CommentComponent from "./components/Comments/CommentComponent";

function App() {


    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(item => {
            setUsers(item);
        })
    }, [])

    const [post, setPost] = useState([]);

    useEffect(() => {
        getPosts().then(posts => {
            setPost(posts);
        })
    }, [])

    const [comment, setComment] = useState([]);

    useEffect(() => {
        getComments().then(comments => {
            setComment(comments);
        })
    }, [])


    return (
        <div id={'main_page'}>

            <div className={'user_and_posts_wrap'}>

                <div className={'user_menu'}>
                    <h1 className={'color_gold'}>USERS</h1>
                    <div className={'users_wrap'}>
                        {
                            users.map(value => {
                                return <UsersComponent key={value.id} properties={value}/>
                            })
                        }
                    </div>
                </div>

                <div className={'posts_menu'}>
                    <h1 className={'color_gold'}>POSTS</h1>
                    <div className={'posts_wrap'}>
                        {
                            post.map(value => {
                                return <PostComponent key={value.id} properties={value}/>
                            })
                        }
                    </div>

                </div>

            </div>

            <div className={'comments_menu'}>
                <div className={'header_style'}>
                    <h1 className={'color_gold'}>COMMENTS</h1>
                </div>
                <div className={'comments_wrap'}>
                    {
                        comment.map(value => {
                            return <CommentComponent properties={value} key={value.id}/>
                        })
                    }
                </div>
            </div>


        </div>
    )
}

export default App;
