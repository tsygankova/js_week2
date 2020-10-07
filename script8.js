// скрипт, который считает сумму элементов двух массивов

const array1 = [3,12,45];
const array2 = [2,6,23,68];
let array1Sum = 0;
let array2Sum = 0;

for (let i = 0; i < array1.length; i +=1){
    array1Sum += array1[i];
}

for (let i = 0; i < array2.length; i +=1){
    array2Sum += array2[i];
}

console.log ('sum1', array1Sum);
console.log ('sum2', array2Sum);
const total = array1Sum + array2Sum;
console.log ('total sum', total);

// var 2

const array = array1.concat(array2);
console.log (array);
let sum = 0;

for (let number of array) {
    sum +=number;
}

console.log ('total', sum);