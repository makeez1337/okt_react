import React from 'react';

import './Cat.css'

const Cat = ({cat,removeCat}) => {


    return (
        <div>
            {cat.value}
            <div className={'btn_style'}>
                <button onClick={()=>removeCat({type:'removeCat',index:cat.index})}>Remove</button>
            </div>
        </div>
    );
};

export default Cat;