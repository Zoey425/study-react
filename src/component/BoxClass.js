import React, { Component } from 'react';

export default class BoxClass extends Component {
    constructor() {
        super();
        this.result = '';
    }
    getResult = () => {
        if (this.props.name === 'COMPUTER' && this.props.result !== 'TIE' && this.props.result !== 'Ready') {
            this.result = this.props.result === 'WIN' ? 'LOSE' : 'WIN';
        } else {
            this.result = this.props.result;
        }
    };
    render() {
        this.getResult();
        return (
            <div>
                <h2>{this.props.name}</h2>
                <div className={`gameBox ${this.result}`}>
                    <img src={this.props.item && this.props.item.img} alt="" className="item-img" />
                    <h3>{this.result}</h3>
                </div>
            </div>
        );
    }
}
