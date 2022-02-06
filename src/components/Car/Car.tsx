import React, {FC} from 'react';
import {ICar} from "../../interfaces";

const Car: FC<{ car: ICar }> = ({car}) => {

    return (
        <div style={{marginBottom: '40px'}}>
            <div>Id:{car.id}</div>
            <div>Model:{car.model}</div>
            <div>Price:{car.price}</div>
            <div>Year:{car.year}</div>
        </div>
    );
};

export {Car};