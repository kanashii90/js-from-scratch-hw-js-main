// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(a,b,c) {
    if (a >= b && b < c) {
        return a;
    }else if (b >= a && b > c) {
        return b;
    }
    return c;
}


console.log(findLargest(4,4,2))