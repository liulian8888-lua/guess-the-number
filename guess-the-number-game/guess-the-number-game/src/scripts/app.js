// This file contains the game logic for the "Guess the Number" game.

let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const maxAttempts = 10;

const guessInput = document.getElementById('guess-input');
const submitButton = document.getElementById('submit-button');
const messageDisplay = document.getElementById('message');
const attemptsDisplay = document.getElementById('attempts');

submitButton.addEventListener('click', function() {
    const userGuess = Number(guessInput.value);
    attempts++;

    if (attempts > maxAttempts) {
        messageDisplay.textContent = `Game over! The secret number was ${secretNumber}.`;
        return;
    }

    if (userGuess === secretNumber) {
        messageDisplay.textContent = `Congratulations! You guessed the number in ${attempts} attempts!`;
    } else if (userGuess < secretNumber) {
        messageDisplay.textContent = 'Too low! Try again.';
    } else {
        messageDisplay.textContent = 'Too high! Try again.';
    }

    attemptsDisplay.textContent = `Attempts: ${attempts}`;
    guessInput.value = '';
    guessInput.focus();
});