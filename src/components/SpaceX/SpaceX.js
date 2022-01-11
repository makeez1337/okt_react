import React from 'react';
import './SpaceX.css'

const SpaceX = (props) => {
    let {item: {mission_name,launch_year,links: {mission_patch_small}}} = props;
    return (
        <div className={'wrapper'}>
            <div className={'left_side'}>
                <h4>{mission_name}</h4>
                <p>{launch_year}</p>
            </div>
            <div className={'right_side'}>
                <img src={mission_patch_small} alt=""/>
            </div>
        </div>
    );
};

export default SpaceX;