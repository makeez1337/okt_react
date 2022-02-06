import React, {FC, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
import carReducer, {getAllCars} from "../../store/slices/car.slice";
import {Car} from "../Car/Car";

const Cars:FC = () => {

    const {cars} = useAppSelector(state => state.carReducer);

    const dispatch = useAppDispatch();

    useEffect(()=>{
        dispatch(getAllCars());
    },[])

    return (
        <div>
            {
                cars.map(car => <Car car={car} key={car.id}/>)
            }
        </div>
    );
};

export {Cars};