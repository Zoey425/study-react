import React from 'react';

const Box = props => {
    let result;
    if (props.name === 'COMPUTER' && props.result !== 'TIE' && props.result !== 'Ready') {
        result = props.result === 'WIN' ? 'LOSE' : 'WIN';
    } else {
        result = props.result;
    }
    console.log('props', props);
    return (
        <div>
            <h2>{props.name}</h2>
            <div className={`gameBox ${result}`}>
                <img src={props.item && props.item.img} alt="" className="item-img" />
                <h3>{result}</h3>
            </div>
        </div>
    );
};

export default Box;
