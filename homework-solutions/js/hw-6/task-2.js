/*
  У вас есть массив названий пицц вашего конкурента.
  Создайте скрипт с циклом, который будет проверять ваш набор названий пицц (массив) 
  и набор названий пицц конкурента (массив), пицц которых нет у конкурента присвойте в переменную "resultUnique" (массив).
  Если все ваши пиццы есть у конкурента результатом будет "null" присвойте в переменную "resultNull".

  Скрипт не должен зависеть от регистра, в котором указаны названия пицц у вас и конкурента
  Воспользуйтесь наборами пицц, что приведены ниже.

  Пиццы:
  const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
  const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
  const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
*/

let resultUnique = [];
let resultNull = [];
let nikomuNeNugnaiaPeremennaia =[]
const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
const ToLowerMyPizzas = myPizzasT1.map(Element => Element.toLowerCase())
const ToLowerCompetitorPizzas = competitorPizzas.map(Element => Element.toLocaleLowerCase())
for (const pizzas of ToLowerMyPizzas) {
  
  if (ToLowerCompetitorPizzas.includes(pizzas)) 
  {
    ++nikomuNeNugnaiaPeremennaia
    if (nikomuNeNugnaiaPeremennaia === ToLowerCompetitorPizzas.length){
    resultNull = null}
  }

  else {
  resultUnique.push(pizzas)}
}  

//второй прогон с другими условиями
const ToLowerMyPizzas2 = myPizzasT2.map(Element => Element.toLowerCase())

for (const pizzas of ToLowerMyPizzas2) {
  
  if (ToLowerCompetitorPizzas.includes(pizzas)) 
  {
    ++nikomuNeNugnaiaPeremennaia
    if (nikomuNeNugnaiaPeremennaia === ToLowerCompetitorPizzas.length){
    resultNull = null}
  }

  else {
  resultUnique.push(pizzas)}
}  
console.log(resultNull)
console.log(resultUnique)
export { resultNull, resultUnique };
