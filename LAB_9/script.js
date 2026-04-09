// ===== GLOBAL VARIABLES =====
let timeLeft = 10;
let timerInterval = null;
const totalTime = 10;

// ===== GET ELEMENTS =====
const timerNumber = document.getElementById('timerNumber');
const rotatingSVG = document.getElementById('rotatingSVG');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resumeBtn = document.getElementById('resumeBtn');
const statusMessage = document.getElementById('statusMessage');
const celebrationMessage = document.getElementById('celebrationMessage');
const confettiContainer = document.getElementById('confettiContainer');

// ===== CONFETTI GENERATION =====
function createConfetti() {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    
    // Gold/champagne colors
    const colors = ['#d4af37', '#ffd700', '#ffffff', '#f0e68c', '#daa520'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    confetti.style.backgroundColor = randomColor;
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.animationDuration = (Math.random() * 2 + 3) + 's';
    confetti.style.animationDelay = Math.random() * 0.5 + 's';
    
    confettiContainer.appendChild(confetti);
    
    setTimeout(() => {
        confetti.remove();
    }, 5000);
}

// ===== TIMER COUNTDOWN FUNCTION =====
function countdown() {
    timeLeft--;
    timerNumber.textContent = timeLeft;
    
    // Update status with party vibes
    if (timeLeft > 5) {
        statusMessage.textContent = `Party starts in ${timeLeft} seconds! 🎊`;
    } else if (timeLeft > 0) {
        statusMessage.textContent = `Almost there... ${timeLeft}! 🎉`;
    }
    
    // Stop at 0
    if (timeLeft <= 0) {
        clearInterval(timerInterval);
        timerInterval = null;
        
        // Show celebration
        celebrate();
        
        // Reset buttons
        startBtn.disabled = false;
        pauseBtn.disabled = true;
        resumeBtn.disabled = true;
        
        // Remove animations
        rotatingSVG.classList.remove('pulse');
        timerNumber.classList.remove('pulse');
        
        // Update status
        statusMessage.textContent = 'Click START PARTY to go again!';
        
        console.log('Countdown finished!');
    }
}

// ===== CELEBRATION FUNCTION =====
function celebrate() {
    // Show celebration overlay
    celebrationMessage.classList.add('show');
    
    // MASSIVE CONFETTI BURST
    for (let i = 0; i < 200; i++) {
        setTimeout(() => {
            createConfetti();
        }, i * 12);
    }
    
    // Continue confetti
    const celebrationInterval = setInterval(() => {
        createConfetti();
        createConfetti();
        createConfetti();
    }, 150);
    
    // Stop confetti after 6 seconds
    setTimeout(() => {
        clearInterval(celebrationInterval);
    }, 6000);
    
    // Hide celebration after 8 seconds
    setTimeout(() => {
        celebrationMessage.classList.remove('show');
    }, 8000);
    
    console.log('🎉 PARTY TIME! 🎉');
}

// ===== EVENT LISTENER: START BUTTON =====
function handleStart() {
    // Reset timer
    timeLeft = 10;
    timerNumber.textContent = timeLeft;
    
    // Start countdown
    timerInterval = setInterval(countdown, 1000);
    
    // Add animations
    rotatingSVG.classList.add('pulse');
    timerNumber.classList.add('pulse');
    
    // Update buttons
    startBtn.disabled = true;
    pauseBtn.disabled = false;
    resumeBtn.disabled = true;
    
    // Update status
    statusMessage.textContent = 'Countdown started! Get ready! 🎈';
    
    console.log('Countdown started');
}

startBtn.addEventListener('click', handleStart);

// ===== EVENT LISTENER: PAUSE BUTTON =====
function handlePause() {
    // Clear interval (pause timer)
    clearInterval(timerInterval);
    timerInterval = null;
    
    // Remove animations
    rotatingSVG.classList.remove('pulse');
    timerNumber.classList.remove('pulse');
    
    // Update buttons
    pauseBtn.disabled = true;
    resumeBtn.disabled = false;
    
    // Update status
    statusMessage.textContent = 'Paused! Hit RESUME when ready 🕐';
    
    console.log('Countdown paused');
}

pauseBtn.addEventListener('click', handlePause);

// ===== EVENT LISTENER: RESUME BUTTON =====
function handleResume() {
    // Resume countdown
    timerInterval = setInterval(countdown, 1000);
    
    // Add animations
    rotatingSVG.classList.add('pulse');
    timerNumber.classList.add('pulse');
    
    // Update buttons
    pauseBtn.disabled = false;
    resumeBtn.disabled = true;
    
    // Update status
    statusMessage.textContent = `Back to the countdown! ${timeLeft} seconds left! 🎊`;
    
    console.log('Countdown resumed');
}

resumeBtn.addEventListener('click', handleResume);

// ===== INITIAL LOG =====
console.log('Party Countdown Timer Loaded! 🎉');