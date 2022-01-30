import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {joiResolver} from "@hookform/resolvers/joi";

import {addCar, createCar, handleInputChanges} from "../../store";
import {carValidator} from "../../validators/carValidator";


const Form = () => {

    const {register, handleSubmit, reset, watch, formState: {errors}} = useForm({
        resolver: joiResolver(carValidator),
        mode: "onTouched"
    })

    const dispatch = useDispatch();

    const onSubmit = (data) => {
        dispatch(createCar({data}));
        reset();
    }

    const obj = watch();
    useEffect(()=>{
    dispatch(handleInputChanges(obj));
    },[obj])


    return (
        <div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Model<input {...register('model')} type="text"/></label>
                <label>Year<input {...register('year')} type="text"/></label>
                <label>Price<input {...register('price')} type="text"/></label>
                <button>Create</button>
                <div style={{display:"flex",flexDirection:'column'}}>
                    <div>{errors.model && errors.model.message}</div>
                    <div>{errors.year && errors.year.message}</div>
                    <div>{errors.price && errors.price.message}</div>
                </div>
            </form>

        </div>
    );
};

export {Form};