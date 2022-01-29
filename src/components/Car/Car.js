import React from 'react';

import {useDispatch} from "react-redux";
import {deleteCarThunk, updateCarThunk} from "../../store";

const Car = ({car}) => {

    const dispatch = useDispatch();

    return (

        <div style={{marginBottom: '50px', marginLeft: '500px'}}>
            <div>Model:{car.model}</div>
            <div>Year:{car.year}</div>
            <div>Price:{car.price}</div>
            <button onClick={() => dispatch(deleteCarThunk({id: car.id}))}>delete</button>
            <button onClick={() => dispatch(updateCarThunk({id: car.id}))}>update</button>
        </div>
    );
};

export {Car};