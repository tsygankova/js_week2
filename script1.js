//создать скрипт, который считает сумму покупок

const a = [25,63,82,12,385,456]

//1 ввести переменную суммы покупок

let total = 0; 

//2 написать цикл перебора массива

for (let purchase of a){
console.log(purchase); 
total += purchase;
}

//3 вывести сумму покупок
console.log (`Общая сумма покупок  составляет ${total} денег`);

//2* добавить сумму налога 20% к каждой покупке и вывести сумму

let totalSum = 0;
const taxIncl = 1.2;

for (let i = 0; i < a.length; i +=1){
a[i] = Math.round(a [i] * taxIncl);
console.log (a[i]);
totalSum += a[i];
}

console.log ('Общая сумма покупок c налогами', totalSum);