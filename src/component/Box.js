import React from 'react';

const Box = props => {
    // console.log('props', props);
    return (
        <div className="gameBox">
            <h1>{props.name}</h1>
            <img src={props.item && props.item.img} alt="" className="item-img" />
            <h2>WIN</h2>
        </div>
    );
};

export default Box;
