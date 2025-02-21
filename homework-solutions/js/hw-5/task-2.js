/**
 * Создать строку с числами от 1 до 100.
 * Если число делится на 3 – добавить строку `"число - делится на 3"`.
 * Если число делится на 5 – добавить строку `"число - делится на 5"`.
 * Если число делится и на 3, и на 5 – добавить строку `"число - делится и на 3 и на 5"`.
 * Каждая следующая строчка начинается с новой строки.
 * Переменная `fizzBuzzResult` уже создана и содержит пустую строку.
 * Ожидаемый результат (фрагмент):
 * 1
 * 2
 * 3 - делится на 3
 * 4
 * 5 - делится на 5
 * ...
 * 15 - делится и на 3 и на 5
 * ...
 * 100 - делится на 5
 */
let fizzBuzzResult = '';
let fizzBuzz = ''
for(let i = 0; i < 100; i++) {
  ++fizzBuzz
  //console.log(fizzBuzzResult)
  let ost = fizzBuzz % 3
  let ost1 = fizzBuzz % 5
  //console.log(ost)
  if (ost === 0 && ost1 === 0){
    fizzBuzzResult += `${fizzBuzz}` + ' - делится и на 3 и на 5' + '\n'
  }
  else if(ost === 0) {
    fizzBuzzResult += `${fizzBuzz}` + ' - делится на 3' + '\n'
  }
  else if (ost1 === 0){
    fizzBuzzResult += `${fizzBuzz}` + ' - делится на 5' +'\n'
  }
  else
  fizzBuzzResult += `${fizzBuzz}` + '\n'
}
fizzBuzzResult = fizzBuzzResult.replace(/[\r\n]+$/, '')
console.log(fizzBuzzResult);



export { fizzBuzzResult };


