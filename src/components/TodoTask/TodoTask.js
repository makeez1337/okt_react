import React from 'react';
import {useDispatch} from "react-redux";

import {deleteTodo, isCheckedStatus} from "../../store/todo.slice";
import css from './TodoTask.module.css'

const TodoTask = ({task, index}) => {

    const dispatch = useDispatch();


    const isChecked = (e) => {
        dispatch(isCheckedStatus({status: e.target.checked, id: task.id}));
    }

    return (
        <div>
            <input onClick={isChecked} type="checkbox"/>
            {task.status === true ?
            <span className={css.line_throught}>{task.todo}</span>
            :
            <span>{task.todo}</span>
            }

            <button style={{marginLeft: '10px'}} onClick={() => dispatch(deleteTodo({index, task}))}>delete</button>
        </div>
    );
};

export default TodoTask;