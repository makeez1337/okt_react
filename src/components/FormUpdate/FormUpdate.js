import React, {useState} from 'react';
import './FormUpdate.css'
import {useForm} from "react-hook-form";
import {carService} from "../../services/car.service";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators/car.validator";

const FormUpdate = ({patchUser}) => {

    const {
        register, watch, handleSubmit, formState: {errors}
    } = useForm();

    const [formError, setFormErrorId] = useState([]);

    console.log(formError);



    const submit = (obj) => {
        const {id, update, value} = obj;
        carService.updateById(+id, {[update]: value}).then(res => patchUser(value)).catch(err => {
            console.log(err.response.data);
            setFormErrorId(err.response.data);
        })
    }

    return (
        <div className={'update_wrap'}>
            <form onSubmit={handleSubmit(submit)}>
                <div><label>Id: <input type="number" defaultValue={''} {...register('id')}/></label></div>
                {formError.detail && <span>{formError.detail}</span>}
                <div><label>Field to update:<input type="text" defaultValue={''} {...register('update')}/></label></div>
                <div><label>New value:<input type="text" defaultValue={''} {...register('value')}/></label></div>
                <button>Update</button>
            </form>
        </div>
    );
};

export default FormUpdate;