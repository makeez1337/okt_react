import React from 'react';

const Dog = ({dog,removeDog}) => {
    console.log(dog);
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