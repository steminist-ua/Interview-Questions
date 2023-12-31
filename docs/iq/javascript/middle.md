# Співбесіда з JavaScript для Middle
## Загальні

1.Розкажіть про піраміду тестування.  
2.Які типи автоматизованих тестів випадала нагода писати? Які бібліотеки при цьому використовували? Яким інструментам віддаєте перевагу і чому?  
3.Що таке unit-тести? Яке місце в піраміді тестування займають unit-тести?  
4.Що таке code coverage? Чи обов’язкове 100% покриття тестами коду?  
5.Як заборонити браузеру віддавати кеш на HTTP-запит?  
6.Що таке XSS (Cross-Site Scripting)?  
7.Розкажіть про патерни Observer, Pub / Sub. Яка між ними різниця? Наведіть приклади реалізації цих патернів у відомих фреймворках / бібліотеках / браузерних API.  
8.З якою метою може бути використаний event listener події fetch self.addEventListener(’fetch’, event => {}) ?  
9.Що таке Event loop і як він працює? Розкажіть про мікрозадачі та макрозадачі.

## JS Core

10.Які типи даних бувають у JavaScript? Який буде результат виконання [коду](https://carbon.now.sh/rDyOjpu0vvgvo8CdAvxr)?

```javascript
let firstObj = { name: 'Hello' };

let secondObj = firstObj;

firstObj = { name: 'Bye' };

console.log(secondObj.name);
```

11.Що таке temporal dead zone?  
12.Як працює boxing / unboxing у JavaScript?  
13.У чому різниця між оператором in і методом hasOwnProperty?  
14.Опишіть, за допомогою чого в JS реалізуються такі ООП-парадигми, як інкапсуляція, поліморфізм, абстракція?  
15. Що таке прототип? Як працює прототипне наслідування в JS? Поясніть роботу [коду](https://carbon.now.sh/IhjDlxZwvH7rxq8JlXhO).

```javascript
function Main () {}
Main.prototype = { protected: true };

const obj = new Main();
Main.prototype = { protected: false };

console.log('Object protection: ', obj.protected); 
```

16.Яка різниця між композицією та наслідуванням?  
17. Чому не варто використовувати конструктори типу new String?  
18.Розкажіть про базовий пристрій і механізм роботи Event loop.  
19. Що таке записи (records) і кортежі (tuples)? Чим вони відрізняються від звичайних об’єктів?  
20.Які відмінності в поведінці ES5 функції-конструктора та ES2015 класу?  
21.Як реалізувати патерн «Модуль»?  
22. Чому typeof null повертає object?  
23.Що таке приведення (перетворення) типів у JS?  
24.Що таке явне і неявне приведення (перетворення) типів даних у JS? Як відбувається перетворення типів у таких прикладах:

```javascript
{}+[]+{}+[1]
!!"false" == !!"true"
['x'] == 'x'
```

25.Що таке Garbage Collector?  
26.Опишіть основні принципи роботи «збирача сміття» у JS-рушіях (engines).  
27.Опишіть призначення і принципи роботи з колекціями WeakMap і WeakSet? Чим вони відрізняються від колекцій Map і Set відповідно?  
28.Чим відрізняється Observable від Promise?  
29. Що таке Promise? Назвіть порядок виконання then і catch [у ланцюжку](https://carbon.now.sh/80s8LLNvYm3HJ03pAQnL).

```javascript
Promise.resolve(10)
  .then(e => console.log(e)) // ??
  .then(e => Promise.resolve(e))
  .then(console.log) // ??
  .then(e => {
    if (!e) {
      throw 'Error caught';
    }
  })
  .catch(e => {
    console.log(e); // ??
    return new Error('New error');
  })
  .then(e => {
    console.log(e.message); // ??
  })
  .catch(e => {
    console.log(e.message); // ??
  });
```

30.Розкажіть про послідовне і паралельне виконання асинхронних функцій. У чому різниця між Promise.all () і Promise.allSettled ()?  
31.Що таке дескриптори властивостей об’єктів? Розкажіть про їхнє практичне застосування.  
32.Назвіть кілька способів створення незмінного об’єкта в JavaScript.  
33.Як створити властивість в об’єкта, яку не можна буде змінити?  
34.Навіщо потрібен конструктор Proxy? Наведіть приклад використання.  
35.Що таке ArrayBuffer? У чому різниця між Uint32Array і Float32Array? Який результат виконання коду?

```javascript
const uint32Array = new Uint32Array();
Array.isArray(uint32Array);
```

36.Яким буде результат порівняння?

```javascript
const url = “HTTPs://xyz.com/path<to>page.html”;
encodeURI(url) == encodeURIComponent(url); 
```

37.Розкажіть про генератори та ітератори.  
38.. Поясніть, що робить наведений код:

```javascript
function * fn(num) {
  for (let i = 0; i < num; i += 1) {
    yield console.log(i);
  }
}
const loop = fn(5);
loop.next();
loop.next();
```

39.Розкажіть про тип даних Symbol і його практичне застосування. Як перевести число з 10-розрядної системи в 16(2,8)-розрядну систему числення?

## Функції

40.Поясніть, що означає currying. Наведіть приклад використання на практиці.  
41.Наведіть приклад функції з мемоізацією. Коли варто застосовувати цю техніку?  
42.Що таке чейнінг функцій? Напишіть приклад з використанням цього підходу.  
43.У чому різниця між function і arrow function? Яким буде результат виконання [коду](https://carbon.now.sh/9PWu91fVD6ER0wLQPR99)?

```javascript
const pluckDeep = key => obj => key.split('.').reduce((accum, key) => accum[key], obj)

const compose = (...fns) => res => fns.reduce((accum, next) => next(accum), res)

const unfold = (f, seed) => {
  const go = (f, seed, acc) => {
    const res = f(seed)
    return res ? go(f, res[1], acc.concat([res[0]])) : acc
  }
  return go(f, seed, [])
}
```

## Front-end

44.У чому принципова різниця між подіями mouseleave і mouseout?  
45.У якому порядку обробляються призначені для користувача події в DOM (click, mouseover тощо)? FIFO чи LIFO?  
46.Що таке Event bubbling та Event capturing?  
47.Порівняйте методи об’єкта event stopPropagation та stopImmediateProparation.  
48.Які є підходи оптимізації продуктивності вебсторінки?  
49.Як реалізований механізм same-origin policy в браузері? На які браузерні API він поширюється?  
50.Назвіть способи зберігання даних у браузері. Порівняйте їх.  
51.Web worker’и. Опишіть особливості передачі даних між worker’ами та основним потоком, між розділеними worker’ами.  
51.Що таке Transferable-об’єкти?  
52.Розкажіть про способи оптимізації виконання ресурсомістких операцій JS для поліпшення продуктивності рендерингу контенту на сторінці.  
53.Чому ResizeObserver викликає події зміни розміру до відтворення елемента, а не після?  
54.Розкажіть, як ви розумієте Web Accessibility?  
55.Опишіть алгоритм створення функціоналу, що забезпечує читання вмісту .txt-файлу при перетягуванні його з файлової системи у вікно браузера.  
56.Що таке Virtual DOM?

## Верстка

57.Поясніть різницю між одиницями вимірювання px, em, rem.  
58.Для чого потрібні CSS-змінні? Наведіть кілька прикладів використання.  
59.Що станеться при додаванні наступного [селектора](https://carbon.now.sh/3uXnCEqIK4omwqQDKntz)?  
`* { box-sizing: border-box; }`   
60.Як адаптувати сторінку для друку?  
61.Опишіть особливості кастомізації стилів стандартних елементів форм.  
62.Що таке progressive рендеринг? Які підходи використовуються?  
63.Назвіть кілька способів реалізації lazy-loading медіаресурсів на сторінці.  
64.Назвіть популярні шаблонізатори для фронтенд-розробки. Опишіть особливості їх використання.  
65.Назвіть популярні CSS-методології та їхні відмінності.  
66.Як працює CSS Grid?  
67.Які формати зображень підтримують анімацію?  
68.Як відстежити прогрес / закінчення CSS @keyframes анімацій або плавних переходів, реалізованих за допомогою transition, у JS?  
69.Які CSS-властивості можуть бути оброблені безпосередньо через GPU? Що таке композитні шари й чому їх велика кількість може призвести до аварійного завершення роботи браузера на мобільних пристроях?  
70.Як перевикористати інлайнові SVG-елементи на сторінці?  
71.Опишіть способи оптимізації SVG-файлів.  
72.Як реалізувати іконковий шрифт з певного набору SVG-файлів?  
73.Що таке хибне жирне або хибне курсивне (Faux) накреслення шрифтів?  
74.Що таке #shadow-root в інспекторі HTML-сторінки?  
75.Навіщо потрібні Custom Elements?  
76.Чому видалення зайвих символів пробілів / символів перенесення в HTML не відбивається на кінцевій продуктивності завантаження сторінки?  
77.Що таке контекст відображення canvas? Які існують типи контексту для рендерингу двовимірної та тривимірної графіки?

## Angular

78.Як працює Dependency injection? Навіщо це потрібно? Розкажіть про використання кастомних інжекторів.  
79.Що таке zone.js? Для чого Angular використовує зони? З якою метою можна використовувати NgZone-сервіс?  
80.Як працює Change detection? Як можна оптимізувати компонент за допомогою схем Change detection? Які ще прийоми є для оптимізації рендерингу (пов’язані з Change detection)?  
81.Як виконати конфігурацію HTTP-сервісу? Навіщо вона потрібна? Обробка HTTP-помилок?  
82.Які є підходи до організації роботи з даними?  
83.Як підготувати збірку до деплою?  
84.Що таке NgRx? Коли варто використовувати?  
85.У яких випадках краще використовувати Renderer-сервіс замість нативних методів? І навпаки?  
86.Як працюють і для чого потрібні резолвери? Як отримати дані, завантажені резолверами?  
87.Як працюють і навіщо потрібні динамічні компоненти? Наведіть приклади їх доцільного використання.  
88.Яка різниця між @ViewChild і @ContentChild?  
89.Що робить код і як інакше можна пов’язати клас компонента зі змінною?  
`@HostBinding('class.valid') isValid;`   
90.Як можна кешувати дані, використовуючи сервіси або RxJS?  
91.Що таке асинхронна валідація форм? Коли застосовується і як реалізується?  
92.Навіщо потрібна forRoot-функція модуля?  
93.Яка різниця між декларуванням і експортом компонента з модуля?  
94.Чому погано «провайдити» сервіс з shared-модуля в lazy-loaded модуль? (Питання про scope модулів.)  
95.Що таке ::ng-deep і для чого використовується?  
96.Які тести можна запустити для Angular-програми? Які інструменти використовують для тестування Angular-програми?  
97.Як протестувати API-сервіс?

## React

98.Що таке JSX? Що лежить в його основі?  
99.Як працює алгоритм Virtual DOM?  
100.Для чого потрібна властивість key під час рендерингу списків?  
101.У чому різниця між функціональними та класовими компонентами?  
102.Навіщо і коли потрібно передавати props в super () при використанні класових компонентів?  
103.Чому потрібно використовувати setState () для оновлення внутрішнього стану компонента?  
104.У чому полягає принцип «підйому стану»?  
105.Які бібліотеки менеджменту стану React-застосунку ви знаєте? Навіщо вони?  
106.Коли варто використовувати Redux? Які є альтернативи?  
107.Redux vs Mobx?  
108.Розкажіть про базовий принцип роботи React Hooks.  
109.У чому різниця між createRef і useRef?  
110.Коли варто використовувати React refs? Коли не варто?  
111.Які недоліки бібліотеки React бачите?  
112.Які патерни використовуєте разом з React?  
113.Як ставитесь до типізації разом з React?  
114.Як побудувати хорошу архітектуру React-проєкту?  
115.Оптимізація React-застосунків? Як виміряти продуктивність програми?  
116.Чи можна застосунок на React вбудувати в інший застосунок на React?

## Back-end

117.Чому Node.js однопотоковий, а не багатопотоковий?  
118.Що таке event driven development?  
119.Порівняйте fork() та spawn() методи.  
120.Розкажіть про Node.js фреймворки, які використовували. Яка між ними різниця?  
121.Опишіть словами код ендпоїнта, який повинен зберегти з клієнта файл розміром 4 гігабайти і покласти його на S3 або інший CDN.  
122.Що таке мікросервіси, навіщо їх використовують?  
123.У яких випадках ви б обрали моноліт, а в яких — мікросервіси?  
124.Як зрозуміти, що застосунок у певний момент працює справно?  
125.Як зрозуміти, що застосунок за останні три дні працював справно?  
126.Як відбувається перевірка правильності паролю при використанні bcrypt?  
127.Що таке JWT?  
128.Джуніор надіслав код на рев’ю. Що тут не так? Як виправити?

```javascript
router.post ( '/ users', async (req, res, next) => {
  const user = await db.createUser (req);

  if (user) {
    return res.json (users);
  }

  res.json ({error: "can not create user"})
})
```

## Бази даних

129.Що таке Redis і для чого його використовують?  
130.Які бази даних використовували? Яка різниця між SQL і NoSQL?  
131.Для двох таблиць — коментарі та користувачі — напишіть запит, який вибирає останні три коментарі для кожного користувача.  
132.Я як замовник прошу вибрати вас базу даних для нового проєкту. Ваші дії?

## Інструменти та інше

133.Для чого потрібен package-lock.json?  
134.У чому різниця між npm install і npm ci?  
135.Для чого потрібні бандлери?  
136.Розкажіть про модульне підключення скриптів. Наведіть приклад використання завантажувальників / бандлерів модулів.  
137.У чому полягає різниця між git merge і git rebase?  
138.Що таке staging area в git?  
139.Опишіть процес code review. Назвіть основні правила, способи вирішення конфліктів і суперечок під час його проведення.

## Практичні завдання

140.Напишіть функцію Sleep (ms), яка зупиняє виконання async-функції на заданий проміжок часу.  
141.Реалізуйте один з методів масиву (наприклад, splice).  
142.Напишіть функцію з RegExp для знаходження всіх HTML-посилань у рядку.  
143.Реалізуйте функцію, яка виконає callback для всіх елементів певної гілки DOM-дерева.  
144.Реалізуйте таблицю з віртуальним скролом.  
145.Реалізуйте функцію [перетворення](https://carbon.now.sh/uipe4o4i6s4Nz2njszBe) URL query рядка в JSON.

```javascript
const inData = "user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue";

function queryObjectify(arg) {
// ??
}

queryObjectify(inData)
/* Результатом виконання для вхідного рядка, повинен бути наступний об’єкт
{
  'user': {
    'name': {
      'firstname': 'Bob',
      'lastname': 'Smith'
    },
    'favoritecolor': 'Light Blue'
  }
};
*/
```

146.Реалізуйте функцію [знаходження](https://carbon.now.sh/qjqQobv17wdF6r27M04L) перетину двох масивів.

```javascript
const first = [1, 2, 3, 4];
const second = [3, 4, 5, 6];

function intersection (a, b) {
// ??
}

intersection(first, second) // -> [3, 4]
```

147.Реалізуйте [функцію / клас](https://carbon.now.sh/IYF6HUAXGDmwz9AEl76p) для генерації HTML.

```javascript
const HTMLConstruct = {};

HTMLConstruct.span('foo'); // -> <span>foo</span>
HTMLConstruct.div.span('bar'); // -> <div><span>bar</span></div>

HTMLConstruct.div.p(
HTMLConstruct.span('bar'),
HTMLConstruct.div.span('baz')
); // -> <div><p><span>bar</span><span>baz</span></p></div>
```

148.Якщо є проєкт з обмеженими термінами та некритичною продуктивністю, чим будете керуватися при виборі бібліотек, підходів? Чи все ж будете звертати увагу на продуктивність? Або навпаки: терміни нелімітовані, продуктивність важлива. Ваші дії?