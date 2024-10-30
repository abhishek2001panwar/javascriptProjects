let square = document.querySelectorAll('.square');
let mole = document.querySelectorAll('.mole');
let timeLeft = document.querySelector('.time');
let score = document.querySelector('.score');
let btn = document.querySelector('.button');
let endBtn = document.querySelector('.end-button');

let result = 0;
let hitPosition;
let timerId;
let moleTimerId;

function click() {
    square.forEach(id => {
        id.addEventListener('mouseup', () => {
            if (id.id === hitPosition) {
                result += 1;
                score.textContent = result;
            }
        });
    });
}

function timer() {
    let currentTime = parseInt(timeLeft.textContent);
    currentTime--;
    timeLeft.textContent = currentTime;
    if (currentTime === 0) {
        clearInterval(timerId);
        clearInterval(moleTimerId);
        alert('Game Over! Your final score is ' + result);
    }
}

function randomSquare() {
    square.forEach(className => {
        className.classList.remove('mole');
    });
    let randomPosition = square[Math.floor(Math.random() * 9)];
    randomPosition.classList.add('mole');
    hitPosition = randomPosition.id;
}

btn.addEventListener('click', () => {
    // Start the game if it's not already running
    if (!timerId && !moleTimerId) {
        timeLeft.textContent = 60;  // Reset time
        score.textContent = 0;      // Reset score
        result = 0;

        moleTimerId = setInterval(randomSquare, 1000);
        timerId = setInterval(timer, 1000);
    }
});

endBtn.addEventListener('click', () => {
    clearInterval(timerId);
    clearInterval(moleTimerId);

    // Reset the mole display and other states
    square.forEach(className => className.classList.remove('mole'));
    timerId = null;
    moleTimerId = null;
    
    timeLeft.textContent = 60;  // Reset time display
    score.textContent = 0;      // Reset score display
    result = 0;

    alert('Game Over! Your final score is ' + result);
});

click();
