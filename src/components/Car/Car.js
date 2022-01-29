import React from 'react';

import {useDispatch} from "react-redux";
import {deleteCar} from "../../store";

const Car = ({car}) => {

    const dispatch = useDispatch();

    return (

        <div style={{marginBottom:'50px', marginLeft:'500px'}}>
            <div>Model:{car.model}</div>
            <div>Price:{car.year}</div>
            <div>Price:{car.price}</div>
            <button onClick={()=>dispatch(deleteCar({id:car.id}))}>delete</button>
        </div>
    );
};

export {Car};