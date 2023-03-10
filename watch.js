let seconds = 0;
let intervalId;


// Start Watch //

function startTimer() {
  intervalId = setInterval(() => {
    seconds++;
    const display = document.getElementById('display');
    display.textContent = formatTime(seconds);
  }, 1000);
}

// stop Watch //

function stopTimer() {
  clearInterval(intervalId);
}
// Reset Watch //

function resetTimer() {
  seconds = 0;
  const display = document.getElementById('display');
  display.textContent = formatTime(seconds);
  clearInterval(intervalId);
}

function formatTime(seconds) {
  
  const secs = Math.floor(seconds % 60);
  return `${secs.toString().padStart(2, '0')}`;
}

// Button //

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('stop').addEventListener('click', stopTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
