/*

(НЕ ОБЯЗАТЕЛЬНО)

Преобразовать Task 2 таким образом, чтобы значение НАПРИМЕР '2' (т.е. ЛЮБАЯ строка в которой лежат ТОЛЬКО ЦИФРЫ) пропускалось, 
  преобразовываясь в number

*/
let minAge = 18
let maxAge = 60
let age = "4"
if (isNaN(age) == true || typeof Number(age) != typeof minAge ) {
  if(isNaN(age) == true ){
    console.log(".!.")
  }
  else{
  console.log("Incorrect data type") 
  }
}
else if (Number(age) < minAge ) {
  console.log("You don't have access cause your age is " + age + " It's less then " + minAge)
}
else if (Number(age) >= minAge && age < maxAge) {
  console.log("Welcome!")
}
else if (Number(age) >= maxAge ) {
  console.log("Keep calm and look Culture channel")
}
else {
  console.log("Technical work")
 
}