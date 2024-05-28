const stickman = document.getElementById('stickman');
const obstacle = document.getElementById('obstacle');
const goal = document.getElementById('goal');
const congratulations = document.getElementById('congratulations');

let isJumping = false;

document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        jump();
    }
});

function jump() {
    if (isJumping) return;
    isJumping = true;

    let jumpHeight = 0;
    const jumpInterval = setInterval(() => {
        if (jumpHeight >= 150) {
            clearInterval(jumpInterval);
            const fallInterval = setInterval(() => {
                if (jumpHeight <= 0) {
                    clearInterval(fallInterval);
                    isJumping = false;
                } else {
                    jumpHeight -= 10;
                    stickman.style.bottom = `${jumpHeight + 20}px`;
                }
            }, 20);
        } else {
            jumpHeight += 10;
            stickman.style.bottom = `${jumpHeight + 20}px`;
        }
    }, 20);
}

function checkCollision() {
    const stickmanRect = stickman.getBoundingClientRect();
    const obstacleRect = obstacle.getBoundingClientRect();
    const goalRect = goal.getBoundingClientRect();

    if (
        stickmanRect.right > obstacleRect.left &&
        stickmanRect.left < obstacleRect.right &&
        stickmanRect.bottom > obstacleRect.top
    ) {
        alert('Game Over!');
        window.location.reload();
    }

    if (
        stickmanRect.right > goalRect.left &&
        stickmanRect.left < goalRect.right &&
        stickmanRect.bottom > goalRect.top
    ) {
        congratulations.classList.remove('hidden');
    }
}

setInterval(checkCollision, 50);
