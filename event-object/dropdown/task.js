/* Д.Задача 1. "Разработка выпадающего списка" по html-элементам */
// Получаем элемент выпадающего меню по классу 'dropdown__value'
const dropDownMenu = document.querySelector('.dropdown__value');

// Получаем элемент списка выпадающего меню по классу 'dropdown__list'
const activeList = document.querySelector('.dropdown__list');

// Получаем все элементы списка выпадающего меню по классу 'dropdown__item' и преобразуем их в массив
const dropDownItem = [...document.querySelectorAll('.dropdown__item')];

// Добавляем обработчик события 'click' для элемента выпадающего меню
dropDownMenu.addEventListener('click', () => {
  // При клике на элемент выпадающего меню добавляем класс 'dropdown__list_active' к списку
  activeList.classList.add('dropdown__list_active');

  // Для каждого элемента списка выпадающего меню добавляем обработчик события 'click'
  dropDownItem.forEach(el => {
    el.addEventListener('click', (e) => {
      // При клике на элемент списка удаляем класс 'dropdown__list_active' из списка
      activeList.classList.remove('dropdown__list_active');
      // Обновляем текстовое содержимое элемента выпадающего меню на текст выбранного элемента списка
      dropDownMenu.textContent = el.textContent;
      // Предотвращаем действие по умолчанию для события клика
      e.preventDefault();
    });
  });
});

