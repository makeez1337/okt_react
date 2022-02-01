import React from 'react';
import {useSelector} from "react-redux";

import TodoTask from "../TodoTask/TodoTask";
import css from './TodoList.module.css'

const TodoList = () => {

    const {todoList} = useSelector(prev => prev['todoReducer']);


    return (
        <div className={css.tasks_wrap}>
            {
                todoList.length !== 0 && todoList.map((task,index) => <TodoTask index={index} task={task} key={task.id}/>)
            }
        </div>
    );
};

export {TodoList};