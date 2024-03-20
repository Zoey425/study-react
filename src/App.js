import { useState } from 'react';
import './App.css';
import Box from './component/Box.js';
/*
    유저스토리
    1. 유저는 박스 두개를 볼 수 있다.
    2. 유저는 박스하단에 가위바위보 버튼을 볼 수 있다.
    3. 버튼을 클릭하면 클릭한 아이템이 유저박스에 보인다.
    4. 버튼을 클릭하면 컴퓨터 아이템은 랜덤하게 선택이 된다.
    5. 3,4번 아이템을 가지고 누가 이겼는지 승패를 나눈다.
    6. 박스 테두리가 결과에 따라 색이 변한다. 지면 빨강, 이기면 녹색, 비기면 검정
*/

// 1. 박스 2개 (타이틀, 사진, 결과)
// 2. 가위 바위 보 버튼이 있음
// 3. 버튼을 클릭하면 틀릭한 값이 박스에 출력.
// 4. 컴퓨터는 랜덤하게 아이템 선택이 됨.
// 5. 3,4번 결과를 가지고 승패 따지기
// 6. 승패 결과에 따라 css 변경

const choice = {
    rock: {
        name: 'ROCK',
        img: 'https://st.depositphotos.com/69369668/59991/i/450/depositphotos_599918908-stock-photo-digital-illustration-cartoon-rock.jpg',
    },
    scissors: {
        name: 'SCISSORS',
        img: 'https://img.freepik.com/premium-vector/scissor-isolated-on-white-background-vector-illustration_454461-5617.jpg',
    },
    paper: {
        name: 'PAPER',
        img: 'https://media.geeksforgeeks.org/wp-content/uploads/20210705223645/paper.jpeg',
    },
};
function App() {
    const [userSelect, setUserSelect] = useState(null);
    const [computerSelect, setComputerSelect] = useState(null);

    const play = userChoice => {
        setUserSelect(choice[userChoice]);
        let computerChoice = getRandomItem();
        setComputerSelect(computerChoice);
    };

    const getRandomItem = () => {
        let itemArray = Object.keys(choice); // 객체에 키 값만 뽑아서 Array로 만들어줌
        console.log(itemArray);
        let randomItem = parseInt(Math.random() * itemArray.length);
        console.log(randomItem);
        let final = itemArray[randomItem];
        // console.log('final', final);
        return choice[final];
    };

    return (
        <div className="game">
            <header>
                <h1>가위바위보 게임</h1>
                <p>
                    하단에 '가위' '바위' '보' 버튼을 눌러
                    <br />
                    컴퓨터와 가위바위보 게임을 해보세요!
                </p>
            </header>
            <main>
                <div className="gameBtn">
                    <button onClick={() => play('scissors')}>가위</button>
                    <button onClick={() => play('rock')}>바위</button>
                    <button onClick={() => play('paper')}>보</button>
                </div>
                <div className="gameBoxWrap">
                    <Box name="YOU" item={userSelect} />
                    <Box name="COMPUTER" item={computerSelect} />
                </div>
            </main>
        </div>
    );
}

export default App;
