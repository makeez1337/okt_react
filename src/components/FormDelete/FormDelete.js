import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../../services/car.service";

const FormDelete = ({updateDelete}) => {


    const {
        register, watch, handleSubmit, formState: {errors}
    } = useForm();

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

            </form>


        </div>
    );
};

export default FormDelete;