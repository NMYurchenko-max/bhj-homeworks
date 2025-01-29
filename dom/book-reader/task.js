/* Задание 3. Онлайн-читалка
Этот код включает в себя:

Обработку изменения размера шрифта.
Обработку изменения цвета текста.
Обработку изменения цвета фона.
Все функции используют единообразный подход к добавлению обработчиков событий и работе с классами. */

// Получаем все элементы с классом 'font-size' и основной элемент читалки
const fontSize = document.querySelectorAll('.font-size');
const reader = document.querySelector('.book');

// Функция обрабатывает изменение размера шрифта
function handleFontSizeChange(e) {
    // Удаляем активный класс у всех элементов меню размера шрифта
    fontSize.forEach(el => el.classList.remove('font-size_active'));

    // Добавляем активный класс к нажатому элементу
    e.target.classList.add('font-size_active');

    // Удаляем предыдущие классы размера шрифта у основного элемента читалки
    reader.classList.remove('book_fs-big', 'book_fs-small');

    // Проверяем, какой размер шрифта был выбран
    if (e.target.classList.contains('font-size_small')) {
        reader.classList.add('book_fs-small');
    } else {
        reader.classList.add('book_fs-big');
    }

    // Предотвращаем стандартное поведение ссылки (перемещение по странице)
    e.preventDefault();
}

// Добавляем обработчики событий для меню размера шрифта
fontSize.forEach(el => {
    el.addEventListener('click', handleFontSizeChange);
});

// Получаем элементы управления цветом текста и фоном
const colorControls = document.querySelectorAll('.color');
const backgroundControls = document.querySelectorAll('.bg_color');

// Добавляем обработчики событий для меню цвета текста
colorControls.forEach(el => {
    el.addEventListener('click', handleTextColorChange);
});

// Добавляем обработчики событий для меню цвета фона
backgroundControls.forEach(el => {
    el.addEventListener('click', handleBackgroundColorChange);
});

// Функция обрабатывает изменение цвета текста
function handleTextColorChange(e) {
    colorControls.forEach(el => el.classList.remove('color_active'));
    e.target.classList.add('color_active');

    reader.classList.remove('book_color-black', 'book_color-gray', 'book_color-whitesmoke');
    reader.classList.add(`book_color-${e.target.dataset.textColor}`);
}

// Функция обрабатывает изменение цвета фона
function handleBackgroundColorChange(e) {
    backgroundControls.forEach(el => el.classList.remove('bg_color_active'));
    e.target.classList.add('bg_color_active');

    reader.classList.remove('book_bg-black', 'book_bg-gray', 'book_bg-white');
    reader.classList.add(`book_bg-${e.target.dataset.bgColor}`);
}