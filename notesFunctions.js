//functions

const add = function (x,y) {
    const result = x + y;
    return result;
};

 const r1 = add (2, 3);
console.log (r1);
const r2 = add (6, 84);
console.log (r2);
 const r3 = add (345, 12);
console.log (r3);

//return прерывает выполнение функции

const fn = function (value){
    if (value < 50){ return 'меньше, чем 50'} 
   return 'больше, чем 50'
} 

console.log (fn(500));
console.log (fn(5));

// функция, которая подсчитывает сумму чисел в массиве

const cart = [5, 10, 12, 6];



const calculateTotalPrice = function (items){
    let total = 0;
    console.log ('items внутри функции', items);

for (const item of items){
    total +=item;
}
return total;}

const cart1 = [12, 23, 5, 67]
const c1 = calculateTotalPrice (cart1);
console.log (c1);

const cart2 = [1, 2, 3];
const c2 = calculateTotalPrice (cart2);
console.log (c2);

const cart3 = [12, 8, 10, 23, 37];
const c3 = calculateTotalPrice (cart3);
console.log (c3);

