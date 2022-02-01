import React from 'react';
import {useDispatch} from "react-redux";

import {deleteTodo, isCheckedStatus} from "../../store/todo.slice";

const TodoTask = ({task, index}) => {

    const dispatch = useDispatch();


    const isChecked = (e) => {
        dispatch(isCheckedStatus({status: e.target.checked, id: task.id}));
    }

    return (
        <div>
            <input onClick={isChecked} type="checkbox"/>
            {task.status === true ?
            <span style={{textDecoration: 'line-through'}}>{task.todo}</span>
            :
            <span>{task.todo}</span>
            }

            <button style={{marginLeft: '10px'}} onClick={() => dispatch(deleteTodo({index, task}))}>delete</button>
        </div>
    );
};

export default TodoTask;