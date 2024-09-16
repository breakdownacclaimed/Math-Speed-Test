const questions = {
    x: 0,
    y: 0,
    operators: ['+', '-', '*'],
};

let answer = 0;
let score = 0;

function startTest() {
    score = 0;
    document.getElementById('speed').classList.add('hidden');
    document.getElementById('question').classList.remove('hidden');
    document.getElementById('result').classList.add('hidden');
    generateQuestion();
    startTimer();
    document.getElementById('startButton').innerText = 'Restart Test';
}

function submitAnswer() {
    let userAnswer = parseFloat(document.getElementById('answer').value);
    if (userAnswer === answer) {
        score++;
    }
    document.getElementById('answer').value = ''; 
    generateQuestion();
}

function generateQuestion() {
    questions.x = Math.floor(Math.random() * 10);
    questions.y = Math.floor(Math.random() * 10);
    const operator = questions.operators[Math.floor(Math.random() * questions.operators.length)];
    answer = eval(`${questions.x} ${operator} ${questions.y}`);
    document.getElementById('question-text').innerText = `What is ${questions.x} ${operator} ${questions.y}?`;
}

let timer;
let timeLeft = 60; // 60 seconds for the test

function startTimer() {
    timeLeft = 60;
    document.getElementById('timer').innerText = `Time left: ${timeLeft}s`;
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').innerText = `Time left: ${timeLeft}s`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            endTest();
        }
    }, 1000);
}

function endTest() {
    document.getElementById('question').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
    document.getElementById('score').innerText = `Your score: ${score}`;
    document.getElementById('animal-type').innerText = 'Congratulation! You are a ' + getAnimalType(score);
}

function getAnimalType(score) {
    const calculationsPerMinute = score;
    if (calculationsPerMinute <= 1) {
        return 'Snail';
    } else if (calculationsPerMinute <= 2) {
        return 'Turtle';
    } else if (calculationsPerMinute <= 5) {
        return 'Cat';
    } else if (calculationsPerMinute <= 10) {
        return 'Dog';
    } else if (calculationsPerMinute <= 20) {
        return 'Horse'; 
    } else if (calculationsPerMinute <= 50) {
        return 'Cheetah';
    } else if (calculationsPerMinute <= 100) {
        return 'Eagle';
    } else {
        return 'Dolphin';
    }
}

function backToHomePage () {
    document.getElementById('result').classList.add('hidden');
    document.getElementById('speed').classList.remove('hidden');
    document.getElementById('startButton').innerText = 'Start Test';
}

