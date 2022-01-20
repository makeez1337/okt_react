import React, {useEffect, useState} from 'react';
import {randompagesService} from "../../services/randompages.service";

const HomePage = () => {

    const [imgVal, setImgVal] = useState('');

    const [imgUrl, setImgUrl] = useState('');

    console.log(imgUrl);

    useEffect(() => {
        randompagesService.getPhoto(imgVal).then(res => setImgUrl(res));
    },[imgVal])




    return (
        <div>
            <div>
                <button onClick={() => {
                    setImgVal('/cats');
                }}>cat</button>
            </div>
            <div>
                <button onClick={() => {
                    setImgVal('/cars');
                }}>car</button>
            </div>
            <div>
                <button onClick={() => {
                    setImgVal('/dogs');
                }}>dog</button>
            </div>
            <div>
                <button onClick={() => {
                    setImgVal('/girl');
                }}>girl</button>
            </div>
            <div>
                <button onClick={() => {
                    setImgVal('/notebook');
                }}>notebook</button>
            </div>

            <div>
                <img src={imgUrl} alt=""/>
                <button onClick={() => {
                    randompagesService.getPhoto(imgVal).then(res => setImgUrl(res));
                }}>Update</button>
            </div>
        </div>

    );
};

export default HomePage;