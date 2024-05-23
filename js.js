const randomNumber = Math.floor(Math.random() * 10) + 1;
function checkGuess() {
    const userGuess = parseInt(document.getElementById('guessInput').value);
    const messageElement = document.getElementById('message');
    if (userGuess === randomNumber) {
        messageElement.textContent = "Parabéns! Ganhaste uma bebida em excelente companhia!";
        messageElement.style.color = "green";
    } else {
        messageElement.textContent = "Errado! Tenta novamente.";
        messageElement.style.color = "red";
    }
}
