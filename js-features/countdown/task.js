// Задание 1.1. Таймер обратного отсчёта - html-элемент, который отображает время в формате секунды:
const timer = document.getElementById('timer');

const intervalId = setInterval(() => {
    if (+timer.textContent <= 0) {
        clearInterval(intervalId);
        alert('Вы победили в конкурсе!');
    } else {
        timer.textContent--;
    }
}, 1000);
