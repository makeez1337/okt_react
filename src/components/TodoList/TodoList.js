import React from 'react';
import {useSelector} from "react-redux";

const TodoList = () => {

    const {todoList} = useSelector(prev => prev.todoReducer);

    console.log(todoList);


    return (
        <div>

        </div>
    );
};

export {TodoList};