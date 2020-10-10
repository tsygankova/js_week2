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
    else { return 'больше, чем 50'}
} 

console.log (fn(500));
console.log (fn(5));

