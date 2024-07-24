document.addEventListener('DOMContentLoaded', (event) => {
    startConfetti();
});

document.getElementById('openLetter').addEventListener('click', function() {
    document.querySelector('.confetti-container').classList.add('hidden');
    document.querySelectorAll('.confetti').forEach(confetti => confetti.remove());
    document.getElementById('letter').classList.remove('hidden');
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
