/**
 * Создать строку с информацией о количестве гласных и согласных букв в слове.
 * Переменная `word` уже создана и содержит строку со словом.
 * Ожидаемый результат для `hello`: "hello contains 2 vowels and 3 consonants".
 */
const word = 'hello';

const glas = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я']
const sogl = ['б', 'в', 'г', 'д', 'ж', 'з', 'й', 'к', 'л', 'м', 'н', 'п', 'р', 'с', 'т', 'ф', 'х', 'ц', 'ч', 'ш', 'щ']
const engglas = ['a', 'e', 'i', 'o', 'u']
const engsogl = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']
const word1 = word.toLowerCase();
let glasVowels = ''
let sogVowels = ''
for(let i = 0; i < word1.length; i++) {
    if (glas.includes(word1[i])) 
        {glasVowels++}
    else if (engglas.includes(word1[i])) 
        {glasVowels++}
    else if (sogl.includes(word1[i])) 
        {sogVowels++}
    else if (engsogl.includes(word1[i])) 
        {sogVowels++}
    else {console.log('kakaha')}    
}
console.log(`${word} содержит ${glasVowels} гласные и ${sogVowels} согласные`)

let vowelsAndConsonantsResult = `${word} contains ${glasVowels} vowels and ${sogVowels} consonants`;

export { vowelsAndConsonantsResult };
