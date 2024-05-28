const stickman = document.getElementById('stickman');
const obstacle = document.getElementById('obstacle');
const goal = document.getElementById('goal');
const congratulations = document.getElementById('congratulations');

let isJumping = false;
let isMovingRight = false;
let isMovingLeft = false;

document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        jump();
    } else if (e.code === 'ArrowRight') {
        isMovingRight = true;
    } else if (e.code === 'ArrowLeft') {
        isMovingLeft = true;
    }
});

document.addEventListener('keyup', (e) => {
    if (e.code === 'ArrowRight') {
        isMovingRight = false;
    } else if (e.code === 'ArrowLeft') {
        isMovingLeft = false;
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

function moveStickman() {
    let stickmanLeft = parseInt(window.getComputedStyle(stickman).left);

    if (isMovingRight && stickmanLeft < 750) {
        stickman.style.left = `${stickmanLeft + 5}px`;
    }

    if (isMovingLeft && stickmanLeft > 0) {
        stickman.style.left = `${stickmanLeft - 5}px`;
    }
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

setInterval(() => {
    moveStickman();
    checkCollision();
}, 50);
