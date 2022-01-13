import React, {useEffect, useState} from 'react';
import './UserDetails.css'
import {postService} from "../../services/post.service";
import Post from "../Post/Post";

const UserDetails = (props) => {
    const {
        user: {id, name, username, email,company,address: {street, suite, city, zipcode, geo: {lat, lng}},phone,
            website},
        setUser
    } = props;

    const [posts, setPosts] = useState([]);


    return (
        <div>
            <div className={'detail_style'}>
                <button onClick={() => {
                    setUser(null)
                }}>HIDE DETAILS
                </button>
                <p className={'detail_text_style'}>id : {id}</p>
                <p className={'detail_text_style'}>Name : {name}</p>
                <p className={'detail_text_style'}>Username : {username}</p>
                <p className={'detail_text_style'}>Email : {email}</p>
                <p className={'detail_text_style color_red'}>Address:</p>
                <p className={'detail_text_style'}>Street : {street}</p>
                <p className={'detail_text_style'}>Suite : {suite}</p>
                <p className={'detail_text_style'}>City : {city}</p>
                <p className={'detail_text_style'}>Zipcode : {zipcode}</p>
                <p className={'detail_text_style color_red'}>Geo:</p>
                <p className={'detail_text_style'}>Lat : {lat}</p>
                <p className={'detail_text_style'}>Lng {lng}</p>
                <p className={'detail_text_style'}>Phone : {phone}</p>
                <p className={'detail_text_style'}>Website : {website}</p>
                <p className={'detail_text_style color_red'}>Company:</p>
                <p className={'detail_text_style'}>name: {company.name}</p>
                <p className={'detail_text_style'}>catchPhrase: {company.catchPhrase}</p>
                <p className={'detail_text_style'}>bs: {company.bs}</p>
                <button onClick={() => {
                    console.log(posts);
                    return postService.getAll()
                        .then(value => {
                            const filteredArray = value.filter((value) => {
                                return value.userId === id;

                            });
                            setPosts(filteredArray);

                        });
                }}
                        className={'btn_style'}>GET POSTS
                </button>
            </div>
            <div className={'posts_wrap'}>
                {
                    posts.length !== 0 && posts.map(value => {
                        if (value.userId !== id) setPosts([]);
                        return <Post item={value} key={value.id}/>
                    })
                }
            </div>
        </div>
    );
};

export default UserDetails;