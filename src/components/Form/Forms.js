import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../../services/car.service";

const Forms = () => {

    const {
        register, handleSubmit, watch, formState: {errors}
    } = useForm();

    const [formError, setFormError] = useState({});
    console.log(formError);


    const submit = (car) => {
        carService.create(car).then(value => console.log(value)).catch(err => {
            console.log(err.response.data);
            setFormError(err.response.data);
        })
    }

    // watch(e=> console.log(e))


    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <div><label>Model<input type="text" defaultValue={''} {...register('model')}/></label></div>
                {formError.model && <span>{formError.model[0]}</span>}
                <div><label>Price<input type="text" defaultValue={''} {...register('price')}/></label></div>
                {formError.price && <span>{formError.price[0]}</span>}
                <div><label>Year<input type="text" defaultValue={''} {...register('year')}/></label></div>
                {formError.year && <span>{formError.year[0]}</span>}
                <button>Save</button>
            </form>
        </div>
    );


};

export default Forms;