// 1) Ждем пока загрузится весь DOM и далее все выполняем в этой функции!

window.addEventListener('DOMContentLoaded', function(){

    // 2) Вводим строгий порядок
    
        'use strict';
    
    // 3) Получаем html элементы, которые нам неоходимы
    
        let tabButton = document.querySelectorAll('.nav-link'),
            tabHeader = document.querySelector('.card-header'),
            tabContent = document.querySelectorAll('.card-body');
    
    // 4) Создаем функцию скрытия контента всех табов, кроме первого. Для этого используем атрибут (a). Вызываем функцию.
        function hideTabContent(a) {
            for (let i = a; i < tabContent.length; i++) {
                tabContent[i].classList.remove('show');
                tabContent[i].classList.add('hide');
    
            }
        }
    
        hideTabContent(1);
    
    // 5) Создаем функцию отображение контента табов, с проверкой - если таб содердит hide.
        function showTabContent(b) {
            if (tabContent[b].classList.contains('hide')) {
                tabContent[b].classList.remove('hide');
                tabContent[b].classList.add('show');
            }
        }

        function removeActiveClass (c) {
            for (let i = 0; i < tabButton.length; i++ ) {
                tabButton[i].classList.remove('active');
            }
        }
    
    // 6) Навешиваем обработчик событий КЛИК на наши табы. Далее проверяем (через класс) кликнут ли таб, запускаем цикл, который перебирает табы и присваивает i-ому табу i-тый табконтент. Остальные табконтенты скрывает. Обрываем цикл как только найдено совпадение.
        tabHeader.addEventListener('click', function(event) {
            let target = event.target;
            if (target && target.classList.contains('nav-link')) {
                for (let i = 0; i < tabButton.length; i++) {
                    if (target == tabButton[i]) {
                        hideTabContent(0);
                        showTabContent(i);
                        removeActiveClass (0);               
                        tabButton[i].classList.add('active');
                        break;
                    }
                }
            }
        });
    });