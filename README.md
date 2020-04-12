# Native JavaScript Tabs
##### *Very easy to use*

Written by Alexander Andro

Это готовый код Табов, написанный на чистом JavaScript, который вы с легкостью сможете применить на своем проекте.

### Подробная инструкция:

1. Первое, что мы делаем, это получаем необходимые элементы с нашей html страницы и записываем их в переменные:
```
let tabButton = document.querySelectorAll('.nav-link'),
    tabHeader = document.querySelector('.card-header'),
    tabContent = document.querySelectorAll('.card-body');
```
2. Создаем функцию скрытия контента всех табов, кроме первого, так как изначально он открыт, и скрывать его контент нам не нужно. Для этого в функции используем атрибут `(a)`, а затем вызываем функцию, подставляя вместо `(a)` - `(1)`. Если мы начнем с 0, то контент        всех табов включая первый будет скрыт.

> ***Важно!*** В вашем css файле должны быть прописаны классы:
`.hide {display: none;}`
`.show {display: flex;}`

> В примере используется свойство ***flex***, в вашем коде может быть любое другое.
```
        function hideTabContent(a) {
            for (let i = a; i < tabContent.length; i++) {
                tabContent[i].classList.remove('show');
                tabContent[i].classList.add('hide');
            }
        }  
        hideTabContent(1);
```
3. Создаем функцию отображение контента нужно нам таба, с проверкой - если таб содержит класс `hide` (скрытый), тогда мы его удаляем и добавляем класс `show`. Далее в пятом пункте мы будем вызывать эту функцию.
```
        function showTabContent(b) {
            if (tabContent[b].classList.contains('hide')) {
                tabContent[b].classList.remove('hide');
                tabContent[b].classList.add('show');
            }
        }
```
4. Создаем функцию удаления класса `active`. Это позволит удалять этот класс с неактивного таба.
```
        function removeActiveClass (c) {
            for (let i = 0; i < tabButton.length; i++ ) {
                tabButton[i].classList.remove('active');
            }
        }
```
5. Навешиваем обработчик событий `click` на наши табы. Затем проверяем (через класс) кликнут ли таб. Запускаем цикл, который перебирает табы и присваивает i-ому `tabButton` i-тый `tabContent`. Остальные `tabContent` скрываем. Удаляем класс `active` и присваиваем его активному табу. Далее обрываем цикл с помощью `break`.
```
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
```


Если у вас остались вопросы, прошу их задавать. Надеюсь, этот простой код найдет применение в ваших проетах.

С уважением, Александр.
