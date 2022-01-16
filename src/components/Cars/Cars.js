import React, {useEffect, useState} from 'react';

import {carService} from "../../services/car.service";
import Car from "../Car/Car";

const Cars = () => {

    const [cars, setCars] = useState([]);

    useEffect(() => {
        carService.getAll().then(cars => setCars([...cars]));
    }, [])

    return (
        <div>
            {
                cars.map(car => <Car car={car} key={car.id}/>)
            }
        </div>
    );
};

export default Cars;