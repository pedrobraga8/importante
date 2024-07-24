document.getElementById('openLetter').addEventListener('click', function() {
    document.querySelector('.confetti-container').classList.add('hidden');
    document.getElementById('letter').classList.remove('hidden');
    startConfetti();
});

function startConfetti() {
    const confettiCount = 200;
    const confettiColors = ['#ff69b4', '#ff1493', '#ffb6c1', '#db7093'];
    for (let i = 0; i < confettiCount; i++) {
        createConfetti(confettiColors[Math.floor(Math.random() * confettiColors.length)]);
    }
}

function createConfetti(color) {
    const confetti = document.createElement('div');
    confetti.style.position = 'fixed';
    confetti.style.width = '10px';
    confetti.style.height = '10px';
    confetti.style.backgroundColor = color;
    confetti.style.left = `${Math.random() * window.innerWidth}px`;
    confetti.style.top = `${Math.random() * window.innerHeight}px`;
    confetti.style.animation = `confetti-fall ${Math.random() * 3 + 2}s linear infinite`;
    document.body.appendChild(confetti);
}

document.addEventListener('animationiteration', (e) => {
    if (e.animationName === 'confetti-fall') {
        e.target.style.left = `${Math.random() * window.innerWidth}px`;
        e.target.style.top = '0';
    }
});
