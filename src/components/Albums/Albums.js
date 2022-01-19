import React, {useEffect, useState} from 'react';
import {useParams,Outlet} from "react-router-dom";

import {albumService} from "../../services/album.service";
import Album from "../Album/Album";
import css from './Albums.module.css'

const Albums = () => {

    const [albums, setAlbums] = useState([]);

    const params = useParams();

    useEffect(() => {
        albumService.getByUserId(+params.id).then(res => setAlbums(res));
    }, [params.id])



    return (
        <div>
            <div className={css.header_wrap}><h1>Albums</h1></div>
            <div className={css.wrap}>
                {
                    albums.map(album => <Album album={album} key={album.id}/>)
                }
            </div>
            <div className={css.outlet}><Outlet/></div>
        </div>);
};

export default Albums;