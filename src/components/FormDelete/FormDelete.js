import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../../services/car.service";
import {joiResolver} from "@hookform/resolvers/joi/dist/joi";
import {carDeleteValidator, carValidator} from "../../validators/car.validator";

const FormDelete = ({updateDelete}) => {


    const {
        register, watch, handleSubmit, formState: {errors}
    } = useForm({resolver:joiResolver(carDeleteValidator),mode:"onTouched"});

    const [formError, setFormError] = useState(null);



    const submit = (id) => {
        carService.deleteById(+id.delete).then(res => updateDelete(+id.delete)).catch(err => {
            setFormError(err.response.data.detail);
        })
    }

    // watch(e=> console.log(e))

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <label>DeleteById: <input type="number" defaultValue={''} {...register('delete')}/></label>
                <button>Delete</button>
                {formError && <div>{formError}</div>}
                {errors.delete && <div>{errors.delete.message}</div>}

            </form>


        </div>
    );
};

export default FormDelete;