import React, {FC} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";

import {ICar} from "../../interfaces";
import {useAppDispatch} from "../../hooks";
import {addCar, addCarThunk} from "../../store";

const Form: FC = () => {

    const {handleSubmit, register, reset, setValue} = useForm<ICar>();

    const dispatch = useAppDispatch();

    const onSubmit:SubmitHandler<ICar> = (car) => {
        dispatch(addCarThunk({car}));
        reset();
    }

    return (
        <div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder={'model'} {...register('model')} type="text"/>
                <input placeholder={'price'} {...register('price',{valueAsNumber:true})} type="number"/>
                <input placeholder={'year'} {...register('year',{valueAsNumber:true})} type="number"/>
                <button>Create</button>
            </form>

        </div>
    );
};

export {Form};