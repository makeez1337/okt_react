import React from 'react';

const Dog = ({dog,removeDog}) => {
    return (
        <div>
            {dog.value}
            <div>
                <button onClick={()=>removeDog({type:'removeDog',index:dog.index})}>Remove</button>
            </div>
        </div>
    );
};

export default Dog;