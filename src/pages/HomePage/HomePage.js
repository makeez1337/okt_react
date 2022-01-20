import React, {useState} from 'react';

const HomePage = () => {

    const [imgUrl, setImgUrl] = useState('');

    const [btnName, setBtnName] = useState('');
    console.log(btnName);
    console.log(imgUrl);


    return (
        <div>
            <div>
                <button>cat</button>
            </div>
            <div>
                <button>car</button>
            </div>
            <div>
                <button>dog</button>
            </div>
            <div>
                <button>girl</button>
            </div>
            <div>
                <button>notebook</button>
            </div>

            <div>
                <img src={imgUrl} alt=""/>
                <button>Update</button>
            </div>
        </div>

    );
};

export default HomePage;