const randomNumber = Math.floor(Math.random() * 10) + 1;
function checkGuess() {
    const userGuess = parseInt(document.getElementById('guessInput').value);
    const messageElement = document.getElementById('message');
    if (userGuess === randomNumber) {
        messageElement.textContent = "Parabéns! Vamos beber um copo na sexta?";
        messageElement.style.color = "green";
    } else {
        messageElement.textContent = "Errado! Tente novamente.";
        messageElement.style.color = "red";
    }
}
