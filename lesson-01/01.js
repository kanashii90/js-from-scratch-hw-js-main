// С помощью цикла while найдите сумму чисел от 1 до 20
// Результат присвойте переменной sum

// your code
let sum = 0
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let count = 0

while (count !== numbers.length) {
    sum += numbers[count];
    count++;
}

console.log("Сумма всех чисел:", sum);