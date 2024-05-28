const stickman = document.getElementById('stickman');
const obstacle1 = document.getElementById('obstacle1');
const obstacle2 = document.getElementById('obstacle2');
const goal = document.getElementById('goal');
const congratulations = document.getElementById('congratulations');

let isJumping = false;
let isMovingRight = false;
let isMovingLeft = false;
let obstacleSpeed = 3;  // Velocidade inicial
let obstacleIncreaseRate = 0.1;  // Aumenta a velocidade dos obstáculos

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
    const obstacle1Rect = obstacle1.getBoundingClientRect();
    const obstacle2Rect = obstacle2.getBoundingClientRect();
    const goalRect = goal.getBoundingClientRect();

    if (
        (stickmanRect.right > obstacle1Rect.left &&
        stickmanRect.left < obstacle1Rect.right &&
        stickmanRect.bottom > obstacle1Rect.top) ||
        (stickmanRect.right > obstacle2Rect.left &&
