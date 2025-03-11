/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив содержащий все элементы переданных массивов.
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/

function mergeArrays(...arrs) {
  let result
  return result = [].concat(...arrs)
}

console.log(mergeArrays([1,2], [3,4], [5,6]))
/*
  2. Devide by _
    - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
    - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
    - Пример: I am super engineer => i_Am_Super_Engineer
  */


function devideBy(sentence) {
  let ToLowerSentence = sentence.toLowerCase()
  let newSentence = []
  let num = 0
  let num2 = 0
  for(let i = 0; i < ToLowerSentence.length; i++, console.log(num) ){

        if (ToLowerSentence[i] !==" " && num === 0) {
          newSentence.push(ToLowerSentence[i])
        }
        else if (num >= 1 && ToLowerSentence[i] === " ") {
          num = 1
        }
        else if (ToLowerSentence[i] === " ") {
          newSentence.push("_")
          ++num}

        else if(num === 1) {
          newSentence.push(ToLowerSentence[i].toUpperCase())
          num = 0
          num2 = 0
        }

       
  }
  return newSentence.join('')
}
  console.log(devideBy('I   am     super       engineer'))
  
  // Ваш код

/*
  3. Фибаначчи
    - Напишите функцию fibonacci(n), возвращающую энное число Фибоначчи
    - числа Фибоначчи (строка Фибоначчи) — числовая последовательность,
      первые два числа которой являются 0 и 1, а каждое последующее за ними число
      является суммой двух предыдущих
    - Например fibonacci(8) //21
  */
function fibonacci(n) {
  if (n < 0) return 'используй число больше либо равное 0';
  else if (n === 0) return 0;
  else if (n === 1) return 1;
  let fib1 = 0; 
  let fib2 = 1; 
  let fibonachi = 0; 

  for (let i = 2; i <= n; i++) {
      fibonachi = fib1 + fib2; 
      fib1 = fib2;      
      fib2 = fibonachi;     
  }

  return fibonachi; 
}
console.log(fibonacci(10))

export { mergeArrays, fibonacci, devideBy };
