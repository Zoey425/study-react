import React, { Component } from 'react';
import './App.css';
import rockImg from './img/rock.png';
import paperImg from './img/paper.png';
import scissorsImg from './img/scissors.png';
import BoxClass from './component/BoxClass.js';

const choice = {
    rock: {
        name: 'ROCK',
        img: rockImg,
    },
    scissors: {
        name: 'SCISSORS',
        img: scissorsImg,
    },
    paper: {
        name: 'PAPER',
        img: paperImg,
    },
};
export default class AppClass extends Component {
    constructor() {
        super();
        this.state = {
            userChoice: null,
            computerSelect: null,
            gameResult: 'Ready',
        };
    }

    play = userChoice => {
        let computerChoice = this.getRandomItem();
        this.setState({
            userSelect: choice[userChoice],
            computerSelect: computerChoice,
            gameResult: this.judgement(choice[userChoice], computerChoice),
        });
    };

    judgement = (user, computer) => {
        if (user.name === computer.name) {
            return 'TIE';
        } else if (user.name === 'ROCK') return computer.name === 'SCISSORS' ? 'WIN' : 'LOSE';
        else if (user.name === 'SCISSORS') return computer.name === 'PAPER' ? 'WIN' : 'LOSE';
        else if (user.name === 'PAPER') return computer.name === 'ROCK' ? 'WIN' : 'LOSE';
    };

    getRandomItem = () => {
        let itemArray = Object.keys(choice);
        let randomItem = parseInt(Math.random() * itemArray.length);
        let final = itemArray[randomItem];
        return choice[final];
    };

    render() {
        return (
            <div className="game">
                <header>
                    <h1>가위바위보 게임</h1>
                    <p>
                        하단에 '가위' '바위' '보' 버튼을 눌러
                        <br />
                        컴퓨터와 가위바위보 게임을 해보세요!
                    </p>
                    <div className="gameBtn">
                        <button>
                            <img src={scissorsImg} alt="" onClick={() => this.play('scissors')} />
                        </button>
                        <button>
                            <img src={rockImg} alt="" onClick={() => this.play('rock')} />
                        </button>
                        <button>
                            <img src={paperImg} alt="" onClick={() => this.play('paper')} />
                        </button>
                    </div>
                </header>
                <main>
                    <div className="gameBoxWrap">
                        <BoxClass name="YOU" item={this.state.userSelect} result={this.state.gameResult} />
                        <BoxClass name="COMPUTER" item={this.state.computerSelect} result={this.state.gameResult} />
                    </div>
                </main>
            </div>
        );
    }
}
