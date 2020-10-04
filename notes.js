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

console.log (enemies.join(' + '));
console.log (enemies.join(' '));
console.log (enemies.join('-'));