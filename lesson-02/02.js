/*
* Напишите код, который симулирует бросок двух шестигранных игральных кубиков и определяет, выпал ли выигрышный дубль.
* В переменные dice1 и dice2 должны присваиваться случайные целые числа от 1 до 6.
* Дубль считается выигрышным, если на обоих дайсах выпало одно и то же число, и это число больше 3.
* Полученное булево значение сохраните в переменной isWinningDouble

* Для успешного прохождения тестов не меняйте названия переменных!
*/

// let dice1 = [1,2,3,4,5,6]// your code
// let dice2 = [1,2,3,4,5,6]// your code
// let isWinningDouble // your code
//
// const randomIndexDice1 = Math.floor(Math.random() * dice1.length);
// const randomIndexDice2 = Math.floor(Math.random() * dice2.length);
// let randomDice1= dice1[randomIndexDice1];
// let randomDice2= dice2[randomIndexDice2];
//
// console.log('Первый бросок: ' + randomDice1)
// console.log('Второй бросок: ' + randomDice2)
//
// if (randomDice1 === randomDice2 && randomDice1 > 3) {
//     isWinningDouble = true;
//   console.log('Выигрышный дубль!')
// } else {
//   console.log('Не выигрышный дубль.')
// }


let dice1 = Math.floor(Math.random() * 6) + 1;
let dice2 = Math.floor(Math.random() * 6) + 1;
let isWinningDouble // your code


console.log('Первый бросок: ' + dice1)
console.log('Второй бросок: ' + dice2)

if (dice1 === dice2 && dice1 > 3) {
    isWinningDouble = true;
    console.log('Выигрышный дубль!')
} else {
    console.log('Не выигрышный дубль.')
}