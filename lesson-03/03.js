// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.


// function findLargest(numArray) {
//     return Math.max(...numArray);
// }
//
// console.log (findLargest([55,4,5]));
//
//


function findLargest(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    }

    if (b >= a && b >= c) {
        return b;
    }

    return c;
}
