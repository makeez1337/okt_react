import React, {useState} from 'react';
import './FormUpdate.css'
import {useForm} from "react-hook-form";
import {carService} from "../../services/car.service";

const FormUpdate = ({patchUser}) => {

    const {
        register, watch, handleSubmit, formState: {errors}
    } = useForm();

    const [formError, setFormErrorId] = useState([]);



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
                {formError.model && <span>{formError.model}</span>}
                {formError.year && <span>{formError.year}</span>}
                {formError.price && <span>{formError.price}</span>}
                <button>Update</button>
            </form>
        </div>
    );
};

export default FormUpdate;