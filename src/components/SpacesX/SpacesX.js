import React, {useEffect, useState} from 'react';
import {getSpacesX} from "../../services/getSpacesX/getSpacesX";
import SpaceX from "../SpaceX/SpaceX";

const SpacesX = () => {

    const [spaces, setSpaces] = useState([]);

    useEffect(() => {
        getSpacesX().then(rockets => {
            setSpaces(rockets);
        });
    }, [])


    return (
        <div>
            {
                spaces.map(value => {
                    return  value.launch_year < 2020 ?
                    <SpaceX key ={value.flight_number} item={value}/> : ''
                })
            }


        </div>
    );
};

export default SpacesX;