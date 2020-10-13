/*Напиши скрипт подсчета стоимости гравировки украшений. 
Для этого создай функцию calculateEngravingPrice(message, pricePerWord) 
принимающую строку (в строке будут только слова и пробелы) 
и цену гравировки одного слова, и возвращающую цену гравировки всех слов в строке.

const calculateEngravingPrice = function(message, pricePerWord) {
  // твой код
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */

 const calculateEngravingPrice = function (message, pricePerWord) {
     console.log (message.split (' ').length * pricePerWord);
 }

 //стрелочная функция
 const calculateEngravingPrice = (message = "", pricePerWord = 0) => message.split (' ').length * pricePerWord;


calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10,
  );

  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20);