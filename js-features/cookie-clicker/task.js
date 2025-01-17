// Задание 1.2. "Игра-кликер" - увеличение счетчика кликов.
// Находим элементы на странице по id печеньки и счётчика
const cookie = document.getElementById('cookie');
const count = document.getElementById('clicker__counter');

// Функция, которая будет вызываться при клике на печеньку
cookie.addEventListener('click', () => {
    // Увеличиваем значение счётчика при каждом клике на печеньку
    count.textContent++;
    // Чередуем уменьшение и увеличение печеньки при каждом клике
    cookie.width = cookie.width == 200 ? 250 : 200;
    // Вычисляем среднее количество кликов в секунду
    speed = count.textContent / (Date.now() / 1000);
    // Выводим среднее количество кликов в секунду в консоль
    console.log(speed);
});



