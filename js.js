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
        let shuffleCount = 5; // Número de trocas

        function swapCups() {
            if (shuffleCount === 0) {
                enableCups(); // Habilitar os copos para seleção
                return;
            }

            const [index1, index2] = getRandomTwoIndices(cups.length);
            const cup1 = cups[index1];
            const cup2 = cups[index2];
            const tempLeft1 = cup1.offsetLeft;
            const tempLeft2 = cup2.offsetLeft;

            cup1.style.transform = `translateX(${tempLeft2 - tempLeft1}px)`;
            cup2.style.transform = `translateX(${tempLeft1 - tempLeft2}px)`;

            setTimeout(() => {
                swapDOMPositions(cup1, cup2);
                cup1.style.transform = '';
                cup2.style.transform = '';

                shuffleCount--;
                setTimeout(swapCups, 500); // Esperar antes da próxima troca
            }, 1000);
        }

        swapCups();
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
            message.innerText = 'PARABÉNS!Ganhaste uma subscrição diária grátis!';
        } else {
            message.innerText = 'AZAR! :(';
        }

        cups.forEach(cup => cup.removeEventListener('click', checkChoice)); // Remover eventos de clique após seleção
    }

    function swapDOMPositions(cup1, cup2) {
        const parent = cup1.parentNode;
        const sibling = cup2.nextSibling === cup1 ? cup2 : cup2.nextSibling;
        parent.insertBefore(cup2, cup1);
        parent.insertBefore(cup1, sibling);

        // Atualizar os índices de data dos copos para refletir as novas posições
        cups.forEach((cup, index) => {
            cup.setAttribute('data-index', index);
            if (index === ballPosition) {
                ball.style.left = `${cup.offsetLeft + 25}px`;
            }
        });
    }

    function getRandomTwoIndices(max) {
        let index1 = Math.floor(Math.random() * max);
        let index2 = Math.floor(Math.random() * max);
        while (index2 === index1) {
            index2 = Math.floor(Math.random() * max);
        }
        return [index1, index2];
    }

    startButton.addEventListener('click', startGame); // Adicionar evento ao botão de iniciar
});
