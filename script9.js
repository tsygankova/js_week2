/*работаем с коллекцией картоек в trello
SPLICE IS DESTRUCTIVE AND CHANGES AN ARRAY;
 - метод splice
  - обновить
  - добавить
  - удалить */

const trelloCards = [
 'card-1',
 'card-2',
 'card-3',
 'card-4'   
]

// удаление по индексу

const cardToRemove = 'card-3';
const index = trelloCards.indexOf (cardToRemove);

console.log (trelloCards.splice(index,1));
console.log (trelloCards);

// добавление по индексу

const cardToAdd = 'card-6';
const index2 = 3;

trelloCards.splice (index, 0, 'card-6');
console.log (trelloCards);

// Обновление по индексу

const cardToChange = 'card-4-new';
const index3 = trelloCards.indexOf('card-4');
trelloCards.splice (index,1,'card-4-new');
console.log (trelloCards);