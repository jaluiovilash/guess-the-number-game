console.log("The game has started");

const randomNum = parseInt(Math.random() * 100 + 1);
// console.log(randomNum);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHigh');
const startOver = document.querySelector('.resultParas');

const para = document.createElement('p');

let prevGuess = [];
let numGuess = 1;


let playGame = true;
if (playGame) {
    submit.addEventListener('click', (e) => {
        e.preventDefault();

        // guess intializing - the number entered by the gamer.
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGame(guess);
    });
}

function validateGame(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number.');
    } else if (guess < 1) {
        alert('Please enter a valid number: more than 1.');
    } else if (guess > 100) {
        alert('Please enter a valid number: less than 100.');
    } else {
        prevGuess.push(guess);
        if (numGuess === 11) {
            displayGuess(guess);
            displayMessage(`Game Over. Random number was: ${randomNum}`)
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNum) {
        displayMessage(`CONGRATS, you've won.`);
        endGame();
    } else if (guess < randomNum) {
        displayMessage(`Number is too low.`);
    } else if (guess > randomNum) {
        displayMessage(`Number is too high.`);
    }
}

// clean up method to clean the submit box and add the previous number to the guess list.
function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}  `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
    lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    para.classList.add('button');
    para.innerHTML = `<h2 id="newGame">Start new game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameBtn = document.querySelector('#newGame')
    newGameBtn.addEventListener('click', (e) => {
        location.reload();
    })
}