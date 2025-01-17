//1.3. Игра «Убей кротов» -
/*Необходимо дописать игру (base.js), убивающую кротов при клике на них.
В случайной лунке появляется крот. При нажатии на него,
игроку засчитывается +1 за нажатие.
Игрок побеждает, если своевременно убивает 10 кротов.
При 5 поражениях игра заканчивается.*/

const hole = [...document.querySelectorAll('div.hole')];
const dead = document.querySelector('#dead');
const lost = document.querySelector('#lost');

hole.forEach(el => {
    el.addEventListener('click', () => {
        el.classList.contains('hole_has-mole')
            ? ++dead.textContent
            : ++lost.textContent;

        if (dead.textContent == 10) {
            alert('Победа!');
        } else if (lost.textContent == 5) {
            alert('Вы проиграли!');
        }

        if (dead.textContent == 10 || lost.textContent == 5) {
            dead.textContent = 0;
            lost.textContent = 0;
        }
    });
});