// массивы
const friends = [];
const enemies = ['Joffrey', 'Cersei', 'Walder Frey', 'Meryn Trant', 'Tywin Lannister', 'The Red Woman', 'Beric Dondarion'];
console.table (enemies);

//обращение к элементам массива
console.log (enemies[2]);

//замена элементов массива
enemies [3] = "Illyan Paine";
console.log (enemies);

//split - превращение строки в массив
const message = 'The night is dark and full of terrors';
console.log (message);
console.log (message.split (' '));
console.log (message.split(''));

//склеивание массива
console.log (enemies.join(' + '));
console.log (enemies.join(' '));
console.log (enemies.join('-'));

// indexOf
console.log ("Joffrey is", enemies.indexOf('Joffrey'));
console.log ("Tyrion Lannister is", enemies.indexOf ('Tyrion Lannister'));

//includes
console.log ("Joffrey is", enemies.includes('Joffrey'));
console.log ("Tyrion Lannister is", enemies.includes ('Tyrion Lannister'));

//push - добавляем элементы в конец массива
enemies.push ('Thoros Of Myr');
console.log (enemies);

//pop - удаляем элементы из конца массива
enemies.pop ();
console.log (enemies);

enemies.pop(2);
console.log(enemies);

//shift - убираем из начала массива
enemies.shift ();
console.log(enemies);

//unshift - добавляем в начало массива
enemies.unshift ('The Mountain');
console.log (enemies);

//slice - позволяет копировать куоск, не меняя исходного массива
console.log(enemies.slice (1,5));
console.log (enemies.slice (-2));
console.log (enemies);

//splice - изменяет исходный массив
enemies.splice(2,3);
console.log(enemies);

enemies.splice (2,1, 'The Hound');
console.log(enemies);

//concat - обединение массивов

const oldEnemies = ['Joffrey', 'Cersei', 'Walder Frey'];
const newEnemies = ['The Red Woman', 'Beric Dondarion'];
const allEnemies = oldEnemies.concat(newEnemies);
console.log ('all enemies are', allEnemies);

// копирование по значению (примитивы)

let n = 10;
let s = n; 

console.log ('n', n);
console.log ('s', s);

n = 20;
console.log ('n', n);
console.log ('s', s);

// копирование по ссылке (сложные типы)

const z = [1, 2, 3];
const y = z;

console.log ('z', z);
console.log ('y', y);

z[0] = 500;

console.log ('z', z);
console.log ('y', y);

//цикл для перебора массива

const lannisters = ['Taiwin', 'Cersei', 'Jaime', 'Tyrion']

for ( let i = 0; i < (lannisters.length); i +=1){
    console.log(lannisters[i]);
}

console.table (lannisters);

// for ( let i = 0; i < (lannisters.length); i += 1){
//   lannisters[i] += 1;
// }

// console.table (lannisters);

// цикл for ... of

for (let lannister of lannisters){
    console.log(lannister); 
}
