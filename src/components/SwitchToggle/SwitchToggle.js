import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeMode} from "../../store";

const SwitchToggle = () => {

    const {darkMode} = useSelector(prev => prev['darkmodeReducer']);
    const dispatch = useDispatch();


    return (
        <div>
            <div className="toggle-container">
                <span style={{fontSize: '20px', color: darkMode ? "grey" : "yellow"}}>☀︎</span>
                <span className="toggle">
            <input
                checked={darkMode}
                onChange={() => dispatch(changeMode())}
                id="checkbox"
                className="checkbox"
                type="checkbox"
            />
            <label htmlFor="checkbox"/>
          </span>
                <span style={{fontSize: '20px', color: darkMode ? "slateblue" : "grey"}}>☾</span>
            </div>
        </div>
    );
};

export {SwitchToggle};