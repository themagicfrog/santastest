function createSnowflakes() {
    const snowflakes = document.querySelector('.snowflakes');
    const flakes = ['❅', '❆', '❄', '❉', '❊'];
    
    setInterval(() => {
        const flake = document.createElement('div');
        flake.className = 'snowflake';
        flake.style.left = Math.random() * 100 + 'vw';
        flake.style.fontSize = Math.random() * 20 + 15 + 'px';
        flake.style.opacity = Math.random() * 0.7 + 0.3;
        flake.innerHTML = flakes[Math.floor(Math.random() * flakes.length)];
        snowflakes.appendChild(flake);
        
        setTimeout(() => {
            flake.remove();
        }, 5000);
    }, 50);
}

const questions = [
    {
        text: "chat i just pulled an all-nighter but tbh i feel fine...",
        options: {
            first: "https://emoji.slack-edge.com/T0266FRGM/peefest/f6a0987d803b1310.png",
            second: "https://emoji.slack-edge.com/T0266FRGM/heavysob/55bf09f6c9d93d08.png"
        },
        correctAnswer: "first"
    },
    {
        text: "i just spent an hour reading confessions posts",
        options: {
            first: "https://emoji.slack-edge.com/T0266FRGM/ultrafastparrot/5148eb2f1db74d3b.gif",
            second: "https://emoji.slack-edge.com/T0266FRGM/oneeyesob/9a1ffbd6efc426d6.png"
        },
        correctAnswer: "second"
    },
    {
        text: "there's going to be a new annoucnment real soon",
        options: {
            first: "https://emoji.slack-edge.com/T0266FRGM/rac_yap/0d5cda8758702476.gif",
            second: "https://emoji.slack-edge.com/T0266FRGM/leeks/5330f53e9686b4e5.png"
        },
        correctAnswer: "second"
    },
    {
        text: "wow i really love your project it's so cool!",
        options: {
            first: "https://a.slack-edge.com/production-standard-emoji-assets/14.0/apple-medium/1f496@2x.png",
            second: "https://a.slack-edge.com/production-standard-emoji-assets/14.0/apple-medium/2b50@2x.png"
        },
        correctAnswer: "first"
    },
    {
        text: "bro i just choked on some boba in public...",
        options: {
            first: "https://emoji.slack-edge.com/T0266FRGM/eggsdee/8d4821b792d61796.png",
            second: "https://emoji.slack-edge.com/T0266FRGM/3kcursed/6e25bb9ac1eb16f7.png"
        },
        correctAnswer: "second"
    },
    {
        text: "hi!",
        options: {
            first: "https://emoji.slack-edge.com/T0266FRGM/hyper-dino-wave/addd3af497b52314.gif",
            second: "https://emoji.slack-edge.com/T0266FRGM/hi/200a305b907ed876.png"
        },
        correctAnswer: "first"
    },
    {
        text: "hiiiiiiiiiiiiiiiiiiiiiiii",
        options: {
            first: "https://emoji.slack-edge.com/T0266FRGM/skull-ios/d049a0fab40acb8e.png",
            second: "https://a.slack-edge.com/production-standard-emoji-assets/14.0/apple-large/1f44d@2x.png"
        },
        correctAnswer: "first"
    },
    {
        text: "so yeah... :( not doing well ughhhhhh",
        options: {
            first: "https://emoji.slack-edge.com/T0266FRGM/noooovanish/ebcb48d27469a989.png",
            second: "https://emoji.slack-edge.com/T0266FRGM/blahaj-heart/db9adf8229e9a4fb.png"
        },
        correctAnswer: "second"
    },
    
    {
        text: "i really want a blahaj",
        options: {
            first: "https://emoji.slack-edge.com/T0266FRGM/sotrue/6a1e1eda78994a7d.png",
            second: "https://emoji.slack-edge.com/T0266FRGM/downvote/38a6232f9147fe96.png"
        },
        correctAnswer: "first"
    },
    {
        text: "88",
        options: {
            first: "https://emoji.slack-edge.com/T0266FRGM/tw_white_check_mark/ac28ec315206b550.png",
            second: "https://a.slack-edge.com/production-standard-emoji-assets/14.0/apple-medium/2705@2x.png"
        },
        correctAnswer: "second"
    },
    {
        text: "on the grindddd",
        options: {
            first: "https://emoji.slack-edge.com/T0266FRGM/same/d3ede37f594ebe65.png",
            second: "https://emoji.slack-edge.com/T0266FRGM/highseas-shop-blahaj/b3fc26ad3061f17c.png"
        },
        correctAnswer: "first"
    },
    {
        text: "i'm really happy today!",
        options: {
            first: "https://emoji.slack-edge.com/T0266FRGM/yay/28592c2bf509c53f.gif",
            second: "https://emoji.slack-edge.com/T0266FRGM/eyes_wtf/77e460f2e3429cba.gif"
        },
        correctAnswer: "first"
    },
    {
        text: "skibidi rizz",
        options: {
            first: "https://a.slack-edge.com/production-standard-emoji-assets/14.0/apple-medium/1f9f5@2x.png",
            second: "https://emoji.slack-edge.com/T0266FRGM/notcool/3f07399a0ce77368.jpg"
        },
        correctAnswer: "second"
    },
    {
        text: ":3",
        options: {
            first: "https://emoji.slack-edge.com/T0266FRGM/3c/b853811bf0d800af.png",
            second: "https://a.slack-edge.com/production-standard-emoji-assets/14.0/apple-medium/2728@2x.png"
        },
        correctAnswer: "first"
    },
    {
        text: "[something very very cool]",
        options: {
            first: "https://a.slack-edge.com/production-standard-emoji-assets/14.0/apple-medium/203c-fe0f@2x.png",
            second: "https://a.slack-edge.com/production-standard-emoji-assets/14.0/apple-medium/2b50@2x.png"
        },
        correctAnswer: "second"
    }
];

let currentQuestion = 0;
let correctAnswers = 0;

const startScreen = document.getElementById('start-screen');
const questionScreen = document.getElementById('question-screen');
const resultScreen = document.getElementById('result-screen');
const questionText = document.getElementById('question-text');
const resultTitle = document.getElementById('result-title');
const resultMessage = document.getElementById('result-message');

document.getElementById('start-btn').addEventListener('click', startTest);
document.getElementById('first-btn').addEventListener('click', () => handleAnswer('first'));
document.getElementById('second-btn').addEventListener('click', () => handleAnswer('second'));
document.getElementById('restart-btn').addEventListener('click', resetTest);

function startTest() {
    document.getElementById('progress').style.width = '0%';
    currentQuestion = 0;
    correctAnswers = 0;
    showQuestion();
    switchScreen(startScreen, questionScreen);
}

function showQuestion() {
    const currentNumber = document.getElementById('current-number');
    currentNumber.textContent = currentQuestion + 1;
    questionText.textContent = questions[currentQuestion].text;
    
    const firstButton = document.getElementById('first-btn');
    const secondButton = document.getElementById('second-btn');
    
    firstButton.innerHTML = `<img src="${questions[currentQuestion].options.first}">`;
    secondButton.innerHTML = `<img src="${questions[currentQuestion].options.second}">`;
    
    const progress = document.getElementById('progress');
    const progressPercentage = (currentQuestion / questions.length) * 100;
    progress.style.width = progressPercentage + '%';
}

function handleAnswer(answer) {
    if (answer === questions[currentQuestion].correctAnswer) {
        correctAnswers++;
    }
    
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    let level;
    
    if (correctAnswers <= 8) {
        level = {
            title: "you're a newbie!",
            message: "you haven't been on slack that often at all - you are not slack addicted! congrats!"
        };
    } else if (correctAnswers <= 13) {
        level = {
            title: "you're getting there!",
            message: "you have decent slack emoji knowledge! nice"
        };
    } else {
        level = {
            title: "you're a pro!",
            message: "you are DEFINITELY slack addicted... please go outside"
        };
    }
    
    resultTitle.textContent = level.title;
    const scoreMessage = document.getElementById('score-message');
    scoreMessage.textContent = `you got ${correctAnswers}/${questions.length}`;
    resultMessage.textContent = level.message;
    
    switchScreen(questionScreen, resultScreen);
    
    if (correctAnswers >= 13) {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    }
}

function resetTest() {
    switchScreen(resultScreen, startScreen);
}

function switchScreen(from, to) {
    from.classList.remove('active');
    to.classList.add('active');
}

createSnowflakes();
document.addEventListener('DOMContentLoaded', createSnowflakes); 