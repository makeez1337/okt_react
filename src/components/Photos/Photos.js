import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {photoService} from "../../services/photo.service";
import Photo from "../Photo/Photo";
import css from './Photos.module.css'

const Photos = () => {

    const params = useParams();

    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        photoService.getByAlbumId(params.photoId).then(res => setPhotos(res));
    }, [params.photoId])


    return (
        <div>
            <div className={css.wrap}>
                <div className={css.photos_wrap}>
                    {
                        photos.map(value => <Photo photo={value} key={value.id}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Photos;