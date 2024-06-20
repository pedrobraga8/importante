document.addEventListener('DOMContentLoaded', function() {
    const cups = document.querySelectorAll('.cup');
    const ball = document.getElementById('ball');
    const message = document.getElementById('message');
    const startButton = document.getElementById('start-button');
    let ballPosition = 0;

    function startGame() {
        ball.style.display = 'block';
        ballPosition = Math.floor(Math.random() * 4);
        const ballLeft = cups[ballPosition].offsetLeft + 25;
        ball.style.left = `${ballLeft}px`;

        setTimeout(shuffleCups, 2000);
    }

    function shuffleCups() {
        ball.style.display = 'none';
        message.innerText = '';
        cups.forEach(cup => cup.style.animation = 'shuffle 1s linear 3');
        
        setTimeout(() => {
            cups.forEach(cup => cup.style.animation = '');
            enableCups();
        }, 3000);
    }

    function enableCups() {
        cups.forEach(cup => {
            cup.addEventListener('click', checkChoice);
        });
    }

    function checkChoice(event) {
        const chosenCup = event.currentTarget;
        const chosenIndex = parseInt(chosenCup.getAttribute('data-index'));

        if (chosenIndex === ballPosition) {
            message.innerText = 'PARABÉNS! Ganhaste um dia de subscrição grátis!';
        } else {
            message.innerText = 'Azar! :( ';
        }

        cups.forEach(cup => cup.removeEventListener('click', checkChoice));
    }

    startButton.addEventListener('click', startGame);
});
