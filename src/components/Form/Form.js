import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import {addCar, createCar,handleInputChanges} from "../../store";

const Form = () => {

    const {register, handleSubmit, reset,watch} = useForm();

    const dispatch = useDispatch();

    const onSubmit = (data) => {
        dispatch(createCar({data}));
        reset();
    }

    const obj = watch();
    dispatch(handleInputChanges(obj));

    return (
        <div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Model<input {...register('model')} type="text"/></label>
                <label>Year<input {...register('year')} type="text"/></label>
                <label>Price<input {...register('price')} type="text"/></label>
                <button>Create</button>
            </form>

        </div>
    );
};

export {Form};