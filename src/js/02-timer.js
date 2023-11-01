import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const dateTimePicker = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('[data-start]');
btnStart.disabled = true;
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');
let selDate;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selDate = selectedDates[0];
    if (options.defaultDate > selDate) {
      btnStart.disabled = true;
      Notify.failure('Please choose a date in the future');
      // window.alert('Please choose a date in the future');
    } else {
      btnStart.disabled = false;
    }
  },
};

flatpickr(dateTimePicker, options);

btnStart.addEventListener('click', onClick);
function onClick() {
  const timerId = setInterval(() => {
    const currentDate = new Date();
    const targetDate = selDate;
    const ms = targetDate - currentDate;
    let g = convertMs(ms);
    btnStart.disabled = true;
    dataDays.textContent = addLeadingZero(g.days);
    dataHours.textContent = addLeadingZero(g.hours);
    dataMinutes.textContent = addLeadingZero(g.minutes);
    dataSeconds.textContent = addLeadingZero(g.seconds);
    if (g.seconds < 0) {
      dataDays.textContent = '00';
      dataHours.textContent = '00';
      dataMinutes.textContent = '00';
      dataSeconds.textContent = '00';
      clearInterval(timerId);
    }
  }, 1000);
}
function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log('hello');
