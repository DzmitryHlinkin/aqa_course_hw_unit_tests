/*


Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), и выводит сумму равную
n + nn + nnn, где n не перемножаются, а конкатенируются


*/
let n = 1
sum = n + Number("" + n + n) + Number("" + n + n + n)
console.log(sum)