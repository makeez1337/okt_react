import React from 'react';
import './UserDetails.css'

const UserDetails = (props) => {
    const {
        user: {id, name, username, email, address: {street, suite, city, zipcode, geo: {lat, lng}}},
        setUser
    } = props;

    return (
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
            <button onClick={() => {

            }}
                    className={'btn_style'}>GET POSTS
            </button>
        </div>
    );
};

export default UserDetails;