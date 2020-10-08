/*работаем с коллекцией картоек в trello
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
console.log (trelloCards.indexOf (cardToRemove));

console.log (trelloCards.splice(2,1));
console.log (trelloCards);

// добавление по индексу

const cardToAdd = 'card-6';

trelloCards.splice (3, 0, 'card-6');
console.log (trelloCards);

// Обновление по индексу

const cardToChange = 'card-4-new';
trelloCards.splice (3,1,'card-4-new');