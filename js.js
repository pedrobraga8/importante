document.addEventListener('DOMContentLoaded', (event) => {
    startConfetti();
});

function startConfetti() {
    const confettiCount = 100;
    const confettiColors = ['#ff69b4', '#ff1493', '#ffb6c1', '#db7093'];
    for (let i = 0; i < confettiCount; i++) {
        createConfetti(confettiColors[Math.floor(Math.random() * confettiColors.length)]);
    }
}

function createConfetti(color) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.backgroundColor = color;
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.top = `${Math.random() * -100}vh`;
    confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
    document.body.appendChild(confetti);
}
