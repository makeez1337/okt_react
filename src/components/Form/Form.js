import React from 'react';

import css from './Form.module.css'

const Form = () => {





    return (
        <div>
            <form className={css.form_wrap}>
                <label>Create ToDo:<input type="text"/></label>
                <button>Create</button>
            </form>

        </div>
    );
};

export {Form};