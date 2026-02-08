// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае

// Стрелочные функции: const sum = (a, b) => a + b;
// Тернарный оператор: const status = age >= 18 ? 'adult' : 'minor';
// Деструктуризация: const { name, age } = person;
// Spread/Rest операторы: const newArray = [...oldArray, newItem];
// Опциональная цепочка: const city = user?.address?.city;
// Методы массивов: map, filter, reduce
// Promise и async/await: const data = await fetch(url);
// Шаблонные литералы: `Hello, ${name}!`
// Короткие свойства объектов: { name, age } (когда name: name)
// Логические операторы для присваивания: ||=, &&=, ??=

const isEven = number => number % 2 === 0; //Эта запись (arrow func) равна функции ниже.

// isEven — это имя переменной, в которую сохраняется функция
// number — параметр функции (одна переменная, поэтому скобки () не обязательны)
// => — объявление стрелочной функции
// number % 2 === 0 — тело функции (из-за простоты можно без фигурных скобок {})

// function isEven(number) {
//     return (number % 2 === 0)
// }

console.log(isEven(2))



