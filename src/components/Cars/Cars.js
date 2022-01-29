import React from 'react';
import {useSelector} from "react-redux";

import {Car} from "../Car/Car";

const Cars = () => {

    const {cars} = useSelector(state => state['carReducer']);

    return (
        <div>
            {cars.length !== 0 && cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};