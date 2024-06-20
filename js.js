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
        const positions = Array.from(cups).map(cup => cup.style.left);
        const shuffledIndices = shuffleArray([0, 1, 2, 3]);

        cups.forEach((cup, index) => {
            cup.style.animation = `complexShuffle 2s linear 1`;
            cup.addEventListener('animationend', () => {
                cup.style.left = positions[shuffledIndices[index]];
                cup.style.animation = '';
            });
        });

        setTimeout(() => {
            enableCups(); // Habilitar os copos para seleção
        }, 2500); // Tempo de embaralhamento
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
            message.innerText = 'PARABÉNS!';
        } else {
            message.innerText = 'AZAR!';
        }

        cups.forEach(cup => cup.removeEventListener('click', checkChoice)); // Remover eventos de clique após seleção
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    startButton.addEventListener('click', startGame); // Adicionar evento ao botão de iniciar
});
