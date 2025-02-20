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

for(let i = 0; i < 100; i++) {
  ++fizzBuzzResult
  //console.log(fizzBuzzResult)
  let ost = fizzBuzzResult % 3
  let ost1 = fizzBuzzResult % 5
  //console.log(ost)
  if (ost === 0 && ost1 === 0){
    console.log(fizzBuzzResult + ' - делится без остатка на 3 и на 5')
  }
  else if(ost === 0) {
    console.log(fizzBuzzResult + ' - делится без остатка на 3')}
  else if (ost1 === 0){
    console.log(fizzBuzzResult + ' - делится без остатка на 5')
  }
  else
  console.log(fizzBuzzResult)
}
export { fizzBuzzResult };
