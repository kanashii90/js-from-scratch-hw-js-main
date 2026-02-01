/* Используйте цикл while для нахождения суммы всех нечётных чисел от 1 до 20.
  Результат вычислений сохраните в переменной sum.

  Вам понадобиться оператор остатка от деления %. Например, выражение 5 % 2 вернёт остаток 1.
*/

// your code
let sum = 0
let numberMin = 1
const numberMax = 20

while (numberMin !== numberMax) {
    if (numberMin % 2 !== 0) {
        sum += numberMin;
    }
    numberMin++;
}
console.log("Сумма чисел от 1 до 20:", sum);

