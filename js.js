document.addEventListener('DOMContentLoaded', function() {
    const cups = document.querySelectorAll('.cup');
    const ball = document.getElementById('ball');
    const message = document.getElementById('message');
    const startButton = document.getElementById('start-button');
    let ballPosition = 0;

    function startGame() {
        message.innerText = ''; // Limpar mensagem anterior
        ballPosition = Math.floor(Math.random() * 4); // Escolher posição aleatória para a bola
        const ballLeft = cups[ballPosition].offsetLeft + 25;
        ball.style.left = `${ballLeft}px`;
        ball.style.display = 'block'; // Mostrar a bola
        
        setTimeout(shuffleCups, 2000); // Embaralhar copos após 2 segundos
    }

    function shuffleCups() {
        ball.style.display = 'none'; // Esconder a bola antes de embaralhar
        cups.forEach(cup => {
            cup.style.animation = 'shuffle 1s linear 3';
        });

        setTimeout(() => {
            cups.forEach(cup => cup.style.animation = ''); // Remover animação
            enableCups(); // Habilitar os copos para seleção
        }, 3000); // Tempo de embaralhamento
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
            message.innerText = 'PARABÉNS! Ganhaste uma subscrição diária grátis!';
        } else {
            message.innerText = 'AZAR! :(';
        }

        cups.forEach(cup => cup.removeEventListener('click', checkChoice)); // Remover eventos de clique após seleção
    }

    startButton.addEventListener('click', startGame); // Adicionar evento ao botão de iniciar
});
