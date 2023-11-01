const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

// let changeColor = getRandomHexColor();
const elBody = document.body;
let timerId = null;

console.log('hello');

startBtn.addEventListener('click', () => {
  timerId = setInterval(() => {
    elBody.style.backgroundColor = getRandomHexColor();
    startBtn.disabled = true;
    stopBtn.disabled = false;
  }, 1000);
});
stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
  startBtn.disabled = false;
  stopBtn.disabled = true;
  elBody.style.backgroundColor = 'stop';
});
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
