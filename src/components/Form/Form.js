import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import {addCar} from "../../store";

const Form = () => {

    const {register, handleSubmit, reset} = useForm();

    const dispatch = useDispatch();

    const onSubmit = (data) => {
        dispatch(addCar({data}));
        reset();
    }

    return (
        <div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Model<input {...register('model')} type="text"/></label>
                <label>Price<input {...register('price')} type="text"/></label>
                <label>Year<input {...register('year')} type="text"/></label>
                <button>Create</button>
            </form>

        </div>
    );
};

export {Form};