/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
/*const toLower = word.toLowerCase()
const restruct = toLower.split('')
const leght = word.length
let result1 = []
for(let i = leght-1; i >= 0; --i) 
{
  result1.push(restruct[i])
}
//console.log(result1.join())
if (restruct.join() === result1.join()) {
  return 'true' 
}
else 
  {return 'false' 

  }*/
  if (typeof word !== "string") {
    return false;
  }
  else if (word.toLowerCase() === word.toLowerCase().split('').reverse().join('')) {
  return 'true';} 
  else {
  return 'false';
  }


}



/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
let slowo = sentence.split(" ")
let maxLeght = Math.max(...slowo.map(word => word.length))
let longest = slowo.filter(word => word.length === maxLeght)

return longest
}

export { isPalindrom, findLongestWords };
