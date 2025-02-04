// Game setup
const secretNumber = 88; // Set the secret number to 88
let attempts = 0;
const maxAttempts = 10;

// DOM elements
const guessInput = document.getElementById("guessInput");
const submitGuess = document.getElementById("submitGuess");
const message = document.getElementById("message");
const attemptsDisplay = document.getElementById("attempts");
const confettiContainer = document.getElementById("confetti-container");

// Function to create confetti
function createConfetti() {
    for (let i = 0; i < 300; i++) { // Increase the number of confetti elements
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confetti.style.width = `${Math.random() * 10 + 5}px`; // Randomize width
        confetti.style.height = `${Math.random() * 10 + 5}px`; // Randomize height
        confetti.style.animationDuration = `${Math.random() * 3 + 2}s`; // Randomize animation duration
        confettiContainer.appendChild(confetti);

        // Remove confetti after animation
        setTimeout(() => {
            confetti.remove();
        }, 5000); // Increase the duration before removal
    }
}

// Function to check the guess
function checkGuess() {
    const guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        message.textContent = "Please enter a valid number between 1 and 100.";
        return;
    }

    attempts++;
    attemptsDisplay.textContent = `Attempts: ${attempts}/${maxAttempts}`;

    if (guess < secretNumber) {
        message.textContent = "Too low! Try a higher number.";
    } else if (guess > secretNumber) {
        message.textContent = "Too high! Try a lower number.";
    } else {
        message.textContent = `Congratulations! You guessed the number in ${attempts} attempts!`;
        submitGuess.disabled = true;
        createConfetti();
        return;
    }

    if (attempts >= maxAttempts) {
        message.textContent = `Game over! The number was ${secretNumber}.`;
        submitGuess.disabled = true;
    }
}

// Event listener for the guess button
submitGuess.addEventListener("click", checkGuess);

// Allow pressing "Enter" to submit the guess
guessInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        checkGuess();
    }
});