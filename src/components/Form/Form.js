import React from 'react';
import {useForm} from "react-hook-form";

import css from './Form.module.css'
import {useDispatch, useSelector} from "react-redux";
import {addTodo} from "../../store/todo.slice";

const Form = () => {

    const {register, handleSubmit, reset} = useForm();

    const {allTasks,completedTasks} = useSelector(prev => prev['todoReducer']);

    const dispatch = useDispatch();

    const onSubmit = (data) => {
        dispatch(addTodo({data}));
        reset();
    }

    return (
        <div>
            <div className={css.counter_wrap}>
                <div>All:{allTasks}</div>
                <div>Completed:{completedTasks}</div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className={css.form_wrap}>
                <label>Create ToDo:<input type="text" {...register('todo')}/></label>
                <button>Create</button>
            </form>

        </div>
    );
};

export {Form};