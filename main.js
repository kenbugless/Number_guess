// 랜덤번호 지정하기
// 유저가 번호를 입력한다. 그리고 go 라는 버튼을 누른다.
// 만약에 유저가 랜덤번호를 맞추면, 맞췄습니다.
// 랜덤번호 <유저번호 Down!
// 랜덤번호 > 유저번호 Up!
// Reset 버튼을 누르면, 게임이 reset이 된다.
// Chance는 5번이므로, 5번 기회를 다 쓰면, 게임이 끝난다.(=더 이상 버튼이 눌리지 않는다.)
// 유저가 큰 숫자나, 작은 숫자를 누르면, 알려준다. 
//유저가 이미 입력한 숫자를 입력하면, 알려주고, 기회를 깎지 않는다.

let computerNum = 0;
let playButton = document.getElementById('play-button');
let userInput = document.getElementById('user-input');
let resultArea = document.getElementById('result-area');
let resetButton = document.getElementById('reset-button');
let chances = 5;
let gameOver = false;
let chanceArea = document.getElementById('chance-area');
let history = [];

playButton.addEventListener('click', play);
resetButton.addEventListener("click",reset);
userInput.addEventListener("focus",function() {
    userInput.value =""
});


function pickRandomNumber() {
    computerNum = Math.floor(Math.random() * 100) + 1; //math.random은 0~1사이 있는 숫자를 반환해준다(0~99반환이 된다).1은 포함이 되지 않는다. 
    console.log("정답", computerNum);
}

function play() {
    let userValue = userInput.value

    if(userValue <1 || userValue >100) {
        resultArea.textContent ="1과 100 사이 숫자를 입력해 주세요"
        return;
    }

    if(history.includes(userValue)){
        resultArea.textContent="이미 입력한 숫자입니다. 다른 숫자를 입력해주세요"
        return;
    }

    chances --;
    chanceArea.textContent= `남은 기회${chances} 번`
    console.log("chances",chances)
    if (userValue < computerNum) {
        resultArea.textContent="UP!"
        console.log("UP!")
    }
    else if (userValue > computerNum) {
        resultArea.textContent="Down!"
        console.log("Down!")
    } else {
        resultArea.textContent="Correct!"
        console.log("Correct")
        gameOver =true;
    }

    history.push(userValue)
    console.log(history)

    if(chances <1){
        gameOver = true;
    }

    if(gameOver ==true) {
        playButton.disabled = true;
    }
}

function reset() {
    //user input창이 깨끗하게 정리가 되야된다. 
    userInput.value ="";
    //새로운 번호가 생성되어야 한다.
    pickRandomNumber()
    resultArea.textContent ="결과값이 여기 나옵니다"
    }



pickRandomNumber();


// play()

// pickRandomNumber()