# Співбесіда з Python для Senior

На співбесідах із Senior’ами зазвичай мало говорять про теоретичний бік технології, більше обговорюють конкретний досвід розробника. Тому формалізованих питань тут немає. Проте прикладом можуть бути:

## Загальне

94.Що таке `@property`?  
95.Яким чином можна запустити код на Python паралельно?  
96.Як працювати зі stdlib?  
97.Які завдання вирішували за допомогою метакласів?  
98.Що таке дескриптори?  
99.Знання інших мов, крім Python (досвід).  
100.Які технологічні особливості реалізації розподілених систем?  
101.Які є низькорівневі особливості мов і фреймворків?  
102.Способи та методи керування пам’яттю.

## Бонус. Практичні завдання

1.Спроєктувати клон Instagram. Це сервіс, який зрозумілий практично будь-якому кандидату, навіть якщо в нього немає акаунту. На високому рівні він дуже простий: картинки, описи, коментарі. Тому щось мінімальне зможе описати й джуніор. Якщо кандидат претендує на вищі позиції, можна нескінченно копати вглиб, торкаючись API, тротлінгу запитів, захисту від фроду, побудови фідів користувача тощо.

2.Дано рекурсивне визначення чисел Фібоначчі, треба написати функцію, яка реалізує це визначення.

3.Є база даних із трьох таблиць — стандартна many-to-many схема. Потрібно написати запит, який об’єднує три таблиці й повертає певний результат.

4.Даємо ТЗ якогось корисного мікросервісу (скорочувалка урлів, пошук дублікатів картинок, пошук тегів у текстах) або функції (rate limiter). Просимо кандидата розповісти, як би він його реалізовував. Це дає та можливість дізнатися, що звик використовувати фахівець, наскільки глибоко він знає і розуміє різні технології.

5.Написати якийсь нескладний декоратор (виводить аргументи функції на екран чи, наприклад, вимірює скільки часу виконувалась функція).

6.Junior’у можна запропонувати реалізувати задачку FizzBuzz test.

7.Для Middle+ я полюбляю давати нескладні задачки на рекурсію. Наприклад, є вкладений список чисел і треба щось на ньому порахувати (скажімо, знайти максимум). Також можна запропонувати написати аналог deepcopy для конкретної структури даних (tree, graph).

8.Для Senior — гра «спроєктувати за 5 хвилин...» Це може бути Google, FB, Twitter, високонавантажений інтернет-магазин, сервіс пошуку, продажу та бронювання квитків, сайт новин тощо. Така задача допомагає зрозуміти, як кандидат розв’язує проблеми, хід його думок, чи вміє відділяти головне від другорядного, зрозуміти, якого він типу («у глибину» чи «в ширину»).

9.Гра «у юзера щось не працює». На прикладі спроєктованої системи співбесідувач вигадує помилку з «дикими симптомами», яку дуже складно зрозуміти, відтворити. Але потрібно швидко розв’язати проблему.

10.Завдання, що демонструє знання та розуміння list та dict comprehensions.

```python
Looking at the below code, write down the final values of A0, A1, ...An.
	A0 = dict(zip(('a','b','c','d','e'),(1,2,3,4,5)))
	A1 = range(10)
	A2 = sorted([i for i in A1 if i in A0])
	A3 = sorted([A0[s] for s in A0])
	A4 = [i for i in A1 if i in A3]
	A5 = {i:i*i for i in A1}
	A6 = [[i,i*i] for i in A1]
	A7 = [i if i%2 else 0 for i in A1 if 2 < i < 8]

	','.join(str(j**2) for j in range(10)) – what is this object ?
```

11.Задача, в якій є три функції, в них виконуються базові операції (сортування, фільтрування, піднесення масиву до квадрата). Потрібно упорядкувати ці три функції в порядку зростання часу, що йде на їх виконання.

```python
Place the following functions below in order of their efficiency. They all take in a list of numbers between 0 and 1. The list can be quite long. An example input list would be [random.random() for i in range(100000)]. How would you prove that your answer is correct? -  profiling?

def f1(lIn):
    l1 = sorted(lIn)
    l2 = [i for i in l1 if i<0.5]
    return [i*i for i in l2]

def f2(lIn):
    l1 = [i for i in lIn if i<0.5]
    l2 = sorted(l1)
    return [i*i for i in l2]

def f3(lIn):
    l1 = [i*i for i in lIn]
    l2 = sorted(l1)
    return [i for i in l1 if i<(0.5*0.5)]
```

Тобто на вході усі функції мають однакові дані, на виході видають однаковий результат. Але через те, що всередині операції виконуються у різному порядку, час виконання буде відрізнятися. Тут потрібно орієнтуватися в алгоритмах і розуміти, що відбувається з твоїми даними у процесі. Цю задачу може розв’язати Junior, а може не розв’язати й Middle. Здавалося б, така дрібниця, але коли ми працюємо з великою кількістю даних, важливо, щоб код був оптимізованим і програма виконувалася максимально швидко.

12.Прості задачі на статистику чи логіку. Наприклад, визначити кут між стрілками годинника, що показує 8:40.