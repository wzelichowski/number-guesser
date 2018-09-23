// GAME VALUES
let min = 1, 
    max = 10, 
    winningNum = 2, 
    guessesLeft = 3;

// UI ELEMENTS
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;

guessBtn.addEventListener('click', function() {
  let guess = parseInt(guessInput.value);
  if(isNaN(guess) | guess < min | guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}.`, 'red');
  }
if(guess === winningNum) {
  gameOver(true, `${winningNum} is correct! You win!`);
} else {
  guessesLeft -= 1;
  if(guessesLeft === 0) {
    gameOver(false, `Game over! You lost. The correct number was ${winningNum}...`);
  } else {
    setMessage(`Guess is not correct! Guesses left: ${guessesLeft}`, 'red');
    guessInput.style.borderColor = 'red';
    guessInput.value = '';
  }
}

})

function setMessage(msg, color) {
  message.textContent = msg;
  message.style.color = color;
}

function gameOver(won, msg) {
  let color;
  won === true ? color = 'green' : color = 'red';
  guessInput.disabled = true;
  guessInput.style.borderColor = 'green';
  message.style.color = color;
  setMessage(msg);
}