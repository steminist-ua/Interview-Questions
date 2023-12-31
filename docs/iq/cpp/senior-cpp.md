# Співбесіда з C++ для Senior


## Загальне

1.Як ви розумієте SOLID?  
2.Як розробити систему плагінів на С++?  
3.Що таке RPC? Які бібліотеки знаєте?  
4.На що звертати увагу під час проведення code review?  
5.Які є проблеми під час написання кросплатформенного коду? На що звертати увагу?  
6.Що робити, якщо код працює повільно?  
7.Які є способи та методологія вимірювання швидкодії коду? Як можна усунути/зменшити вплив замірів на швидкодію?  
8.Що таке SFINAE? Для чого використовується?  
9.Що таке метапрограмування? За допомогою чого реалізується на С++?  
10.Як використовувати variadic templates?  
11.Як тестувати закриті методи?  
12.Як рахувати покриття тестами? Чи потрібно це робити?  
13.Що таке cache miss і як це виявити?  
14.Що таке SIMD-інструкції? Які є необхідні умови та способи їх використання?  
15.Що таке покриття коду і як забезпечується?  
16.Опишіть принципи lock-free структур даних і свій досвід роботи з ними.

## Препроцесор і компіляція

17.Розкажіть про побудову білд-системи.  
18.Як працювати з білд-системами: Make, CMake.  
19.Як інтегрувати third-party в проєкт?  
20.Що таке бар’єри пам’яті?  
21.Розкажіть про роботу з сирими вказівниками та ручне управління пам’яттю.  
22.Що таке статичний аналізатор коду? Які знаєте?  
23.Що таке динамічний аналізатор коду? Які знаєте?  
24.Проєкт повільно збирається. Як можна прискорити?

## C/C++

25.Розкажіть про використання `realloc` в контейнерах.  
26.Як працюють темплейти?  
27.Розкажіть про спеціалізацію темплейтів.  
28.Як працює RTTI?  
29.Чи можна використовувати exception в конструкторі/деструкторі?  
30.Що таке `rvalue` та `lvalue`?  
31.В чому особливості контейнерів `std::set`, `std::map`, `std::unordered_map`, `std::hash`?  
32.Що таке `placement new`? Для чого використовують? Як зробити `placement delete`?  
33.Як розміщується в пам’яті клас з множинним успадкуванням та віртуальними функціями?  
34.Як працюють точки зупинки?  
35.Що таке вразливості? Який механізм їхньої роботи?  
36.Як написати власний `std::shared_ptr`?  
37.Що таке curiously recurring template pattern?  
38.Опишіть призначення та принцип роботи `std::shared_ptr`, `std::unique_ptr` та `std::weak_ptr`.  
39.Яке призначення та відмінності використання `std::variant` та `std::any`?  
40.Які покращення отримав `std::search` з С++17?  
41.Що таке copy elision і коли стає можливим? Які є особливості для різних стандартів?  
42.Що таке Return Value Optimization?

## OOP/OOD

43.Поясніть принципи SOLID.  
44.Поясніть принципи KISS.  
45.Поясніть принципи YAGNI.  
46.Які є підходи до оптимізації коду?  
47.На що варто звертати увагу під час code review?  
48.Які є патерни проєктування? Чому не радять використовувати Singleton?  
49.Що таке статичний поліморфізм?

## STL/Algorithms

50.Коли `std::vector` може використовувати `std::move`?  
51.Розкажіть про свій улюблений алгоритм пошуку.  
52.Що таке lock-free та wait-free алгоритми? У чому їхні відмінності та способи реалізації?  
53.Опишіть призначення execution policy для паралельних алгоритмів.

## Багатопотоковість

54.Розкажіть про побудову API, розрахованих на багатопотокове використання.  
55.У чому різниця між kernel-level та user-level потоками?  
56.Що таке coroutine?  
57.Що робить специфікатор `thread_local`?  
58.Як реалізувати синхронізацію в задачі producer-consumer?  
59.Як синхронізуватися між різними процесами?

## SCM/CI/CD

60.Розкажіть про налаштування процесу менеджменту гілок репозиторію.  
61.Розкажіть про стратегію бренчування.

## Практичні завдання

62.Напишіть базову реалізацію `std::shared_ptr`.  
63.Реалізуйте алгоритм сортування.  
64.Реалізуйте алгоритм хешування.  
65.Реалізуйте `shared_ptr` з розширенням для `weak_ptr`.  
66.Реалізуйте найпростіший producer-consumer, використовуючи умовні змінні.  
67.Опишіть якомога детальніше, що відбувається в системі, коли застосунок робить мережевий запит.  
68.Детально описати дизайн програмного компонента, наприклад, системи голосування — врахувати при цьому високе навантаження і зробити його розширюваним і відмовостійким.