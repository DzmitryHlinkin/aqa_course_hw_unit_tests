/**
 * Сложить строку с четными числами от 10 до 0, разделенными `-` в переменную evenNumbersResult.
 * Переменная для результата `evenNumbersResult` уже создана и содержит пустую строку.
 * Ожидаемый результат: '10-8-6-4-2-0'
 */

let evenNumbersResult = '';

for(let i=10; i >= 0 ; i--){
    if (Math.floor(i/2) === i/2){
        if(i === 10){
            evenNumbersResult = i
        }
        else {

        evenNumbersResult = evenNumbersResult + "-" + String(i)
    
        console.log(i)
        }

    }
    else{console.log(evenNumbersResult)}

}
console.log(evenNumbersResult)

/**
 * Создать строку из 5 строк с увеличивающимся количеством смайликов ":)".
 * Переменная для результата `smilePatternResult` уже создана и содержит пустую строку.
 * Ожидаемый результат:
 * :)
 * :):)
 * :):):)
 * :):):):)
 * :):):):):)
 */

let smilePatternResult = '';
const smile = ':)'
let i = 0
while(i<6) {
  console.log(`${smilePatternResult}`)
  i = i+1
  smilePatternResult = `${smilePatternResult}` + `${smile}`
}

/**
 * Заменить все пробелы в переменной text на "1".
 * Переменная для результата `replaceSpacesWithOneResult` уже создана и содержит пустую строку.
 * Ожидаемый результат: 'Hello!1I1am1a1JS1student!'
 */
const text = 'Hello! I am a JS student!';
let replaceSpacesWithOneResult = text.replace(/ /g, '1');
console.log(replaceSpacesWithOneResult)
export { evenNumbersResult, smilePatternResult, replaceSpacesWithOneResult };
