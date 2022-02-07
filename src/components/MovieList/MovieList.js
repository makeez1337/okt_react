import React, {useEffect} from 'react';
import {axiosService} from "../../services";

const MovieList = () => {

    useEffect(()=>{
        (async ()=>{
            const res = await axiosService.get('/discover/movie?page=2&with_genres=12,80');
            console.log(res.data);
        })()
    },[])

    return (
        <div>
            Movie
        </div>
    );
};

export {MovieList};