import React, {useEffect, useState} from 'react';

import {carService} from "../../services/car.service";
import Car from "../Car/Car";

const Cars = ({trigger,deleteTrigger,updateTrigger}) => {

    const [cars, setCars] = useState([]);

    useEffect(() => {
        carService.getAll().then(cars => setCars([...cars]));
    }, [trigger,deleteTrigger,updateTrigger])

    return (
        <div>
            {
                cars.map(car => <Car car={car} key={car.id}/>)
            }
        </div>
    );
};

export default Cars;