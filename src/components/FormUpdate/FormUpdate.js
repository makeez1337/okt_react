import React, {useState} from 'react';
import './FormUpdate.css'
import {useForm} from "react-hook-form";
import {carService} from "../../services/car.service";
import {joiResolver} from "@hookform/resolvers/joi/dist/joi";
import {carUpdateValidator} from "../../validators/car.validator";

const FormUpdate = ({patchUser}) => {

    const {
        register, watch, handleSubmit, formState: {errors}
    } = useForm({resolver: joiResolver(carUpdateValidator), mode: 'onTouched'});

    const [formError, setFormErrorId] = useState([]);

    const [form, setForm] = useState('');

    watch(e => setForm(e.update));

    console.log(form);

    console.log(formError);


    const submit = (obj) => {
        console.log(obj);
        const {id, fieldKey, fieldValue} = obj;
        carService.updateById(+id, {[fieldKey]: fieldValue}).then(res => patchUser(fieldValue)).catch(err => {
            console.log(err.response.data);
            setFormErrorId(err.response.data);
        })
    }


    return (
        <div className={'update_wrap'}>
            <form onSubmit={handleSubmit(submit)}>
                <div><label>Id: <input type="number" defaultValue={''} {...register('id')}/></label></div>
                {formError.detail && <span>{formError.detail}</span>}
                {errors.id && <div>{errors.id.message}</div>}
                <div><label>Field to update:<input type="text" defaultValue={''} {...register('fieldKey')}/></label>
                </div>
                <div><label>New value:<input type="text" defaultValue={''} {...register('fieldValue')}/></label></div>
                {errors.fieldKey && <div>{errors.fieldKey.message}</div>}
                {errors.fieldValue && <div>{errors.fieldValue.message}</div>}
                <button>Update</button>
            </form>
        </div>
    );
};

export default FormUpdate;