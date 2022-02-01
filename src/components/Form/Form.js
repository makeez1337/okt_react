import React from 'react';
import {useForm} from "react-hook-form";

import css from './Form.module.css'
import {useDispatch} from "react-redux";
import {addTodo} from "../../store/todo.slice";

const Form = () => {

    const {register,handleSubmit,reset} = useForm();

const dispatch = useDispatch();

    const onSubmit = (data) => {
        dispatch(addTodo({data}));
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className={css.form_wrap}>
                <label>Create ToDo:<input type="text" {...register('todo')}/></label>
                <button>Create</button>
            </form>

        </div>
    );
};

export {Form};