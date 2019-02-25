//텍스트버튼의 생성, 출력을 담당
const game = {
    text: ['HELLO', 'NICE TO', 'MEET', 'YOU', 'HAVE', 'NICE', 'WONDERFUL', 'BEAUTIFUL', 'DAY', 'LOVE'],
    quest: [],
    btns: [],
};
//문제 텍스트를 랜덤하게 추출하는 메소드
//text배열에서 랜덤하게 단어를 골라서 btns배열에 한글자씩 넣고 id=text부분에 출력 비교를 위해 quest배열에 단어넣기
game.selectWord = function () {
    let randomNum = Math.floor(Math.random() * this.text.length);
    let questText = this.text[randomNum];
    this.btns = questText.split('');
    this.quest = [questText]; //btns배열과의 비교를 위한 배열설정
    output.dispQuest(questText);
}

//btns배열에서 텍스트를 하나씩 읽어와서 HTML버튼으로 구현하는 메소드
game.makeBtn = function () {
    for (let i = 0; i < this.btns.length; i++) {
        let btn = '<button class="btn">' + this.btns[i] + '</button>';
        output.dispBtn(btn);
    }
}

//표시되어있던 버튼 지우고 재배열된 버튼 표시
game.updateBtn = function () {
    output.textBtnArea.innerHTML = '';
    this.makeBtn();
    output.dispResult();
}

//문제 제출하는 메소드
game.newGame = function () {
    output.textBtnArea.innerHTML = '';
    this.selectWord();
    this.makeBtn();
    action.shuffle();
}

//다시시작하는 메소드
game.restart = function () {
    this.newGame();
    game.startTime = Date.now();
    output.hideShowBtns('show');
    output.countArea.innerHTML = '';
    output.countTimeArea.innerHTML = '';
    output.answer = 0;
}

//버튼을 이동하는 액션을 담당하는 객체
const action = {};
action.turn = function () {
    for (let i = game.btns.length - 1; i >= 0; i--) {
        game.btns.push(game.btns[i]);
    }
    for (let i = 0; i < game.btns.length; i++) {
        game.btns.shift()
    }
    game.updateBtn();
}

action.pushLeft = function () {
    game.btns.push(game.btns[0]);
    game.btns.shift();
    game.updateBtn();
}

action.pushRight = function () {
    game.btns.unshift(game.btns[game.btns.length - 1])
    game.btns.pop();
    game.updateBtn();
}

action.shuffle = function () {
    let toggle = Math.floor(Math.random() * 2)
    if (toggle === 0) {
        this.turn();
    }
    let pushNum = Math.floor(Math.random() * game.btns.length - 1)
    for (let i = 0; i < pushNum; i++) {
        this.pushLeft();
    }
}

//화면 출력을 담당하는 객체
const output = {
    answer: 0,
    maxPlay: 3,
    countArea: document.getElementById('count'),
    textArea: document.getElementById('text'),
    textBtnArea: document.getElementById('textBtn'),
    actionBtnsArea: document.getElementById('actionBtns'),
    restartArea: document.getElementById('restart'),
    resultArea: document.getElementById('result'),
    countTimeArea: document.getElementById('countTime')
};

//문제 텍스트를 출력하는 메소드
output.dispQuest = function (text) {
    this.textArea.innerHTML = text;
}

//버튼을 출력하는 메소드
output.dispBtn = function (html) {
    this.textBtnArea.innerHTML += html;
}

//결과를 판단, 출력하는 메소드
output.dispResult = function () {
    if (game.quest.join('') == game.btns.join('')) {
        this.resultArea.innerHTML = '일치합니다';
        this.countAnswer();
        this.printThks();
    } else {
        this.resultArea.innerHTML = '일치하지 않습니다';
    }
}

//맞춘횟수 동그라미 출력하는 메소드
output.countAnswer = function () {
    this.countArea.innerHTML += 'O';
    this.answer += 1;
}

//세문제 맞추면 종료문구 출력하는 메소드
output.printThks = function () {
    if (this.answer === this.maxPlay) {
        game.endTime = Date.now();
        this.countTime(game.startTime, game.endTime);
        this.countArea.innerHTML = 'Thank you for playing!';
        this.hideShowBtns('hide')
    } else {
        game.newGame();
    }
}

//액션버튼 숨기거나 나타내는 메소드
output.hideShowBtns = function (status) {
    if (status === 'hide') {
        this.actionBtnsArea.style.display = 'none';
        this.restartArea.style.display = 'block';
    } else {
        this.actionBtnsArea.style.display = 'block';
        this.restartArea.style.display = 'none';
    }
}

//문제 푸는데 걸린 시간을 측정하고 표시하는 메소드
output.countTime = function (t1, t2) {
    let playTime = t2 - t1;
    this.countTimeArea.innerHTML = playTime / 1000 + '초';
}

//첫 게임 시작
game.newGame();
game.startTime = Date.now();