import React from 'react';

const Cat = ({cat,removeCat}) => {


    console.log(removeCat);
    return (
        <div>
            {cat.value}
            <div>
                <button onClick={()=>removeCat({type:'removeCat',index:cat.index})}>Remove</button>
            </div>
        </div>
    );
};

export default Cat;