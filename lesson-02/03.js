/*
 * Напишите код, который будет определять оценку студента (grade) в зависимости от балла (score).
 * Балл может быть целым числом от 0 до 100, а оценки 'F' (0 - 49), 'D' (50 - 69), 'C' (70-79), 'B' (80 - 89), 'A' (90 - 100)
 * Результат сохраните в переменной grade.
 */


// function gradeRange(n) {
//     return Array.from({length: n}, (_, i) => i + 1);
// }

const score = 5;
let grade

const A = Array.from({length: 11}, (_, i) => 90 + i);
const B = Array.from({length: 10}, (_, i) => 80 + i);
const C = Array.from({length: 10}, (_, i) => 70 + i);
const D = Array.from({length: 20}, (_, i) => 50 + i);
const F = Array.from({length: 50}, (_, i) => i);


if (A.includes(score)) {
    grade = "A";
} if (B.includes(score)) {
    grade = "B";
} if (C.includes(score)) {
    grade = "C";
} if (D.includes(score)) {
    grade = "D";
} if (F.includes(score)) {
    grade = "F";
}

console.log(grade);




// function createArrayWithArrayFrom(n) {
//     return Array.from({ length: n }, (_, i) => i + 1);
// }
//
// // Пример использования:
// const numbers = createArrayWithArrayFrom(50); // [1, 2, 3, 4, 5]
//
// console.log(numbers);

// const score = 70 // тестовое значение, можно изменять
// // your code
