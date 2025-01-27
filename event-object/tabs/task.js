/* Задача 3. "Управление вкладками" */
// Добавляем обработчик события 'DOMContentLoaded',
//который будет выполнен после полной загрузки HTML-документа
document.addEventListener('DOMContentLoaded', function() {
    // Получаем все элементы с классом 'tab' и сохраняем их в переменной 'tabs'
    const tabs = document.querySelectorAll('.tab');
    // Получаем все элементы с классом 'tab__content' и сохраняем их в переменной 'contents'
    const contents = document.querySelectorAll('.tab__content');

    // Проходим по каждому элементу в 'tabs' и добавляем обработчик события 'click'
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            // Удаляем активные классы у всех вкладок и содержимого
            tabs.forEach(t => t.classList.remove('tab_active'));
            contents.forEach(c => c.classList.remove('tab__content_active'));

            // Добавляем активный класс к нажатой вкладке и соответствующему содержимому
            tab.classList.add('tab_active');
            contents[index].classList.add('tab__content_active');
        });
    });
});

