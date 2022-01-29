import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Car} from "../Car/Car";
import {getAllCars} from "../../store";

const Cars = () => {

    const {cars, status, error} = useSelector(state => state['carReducer']);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCars());
    }, [])

    return (
        <div>
            {status === 'pending' && <h2>LOADING</h2>}
            {status === 'rejected' && <h2>{error}</h2>}
            {cars.length !== 0 && cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};