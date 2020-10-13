/*Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

const findLongestWord = function(string) {
  // твой код
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force' */
'use strict';

const findLongestWord = function (string = ''){
    const words = string.split(' ');
    let longestWord = '';
    for (let i = 0; i < words.length; i += 1){
    words[i].length > longestWord.length ? longestWord = words[i] : longestWord = longestWord}
    return longestWord;
  }

console.log(findLongestWord('Google do a roll'));
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); 
console.log(findLongestWord('May the force be with you'));
console.log(findLongestWord('Google do a roll'));

