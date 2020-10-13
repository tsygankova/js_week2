/*Напиши функцию getItemsString(array), 
которая получает массив и возвращает строку, 
полученную из объединения (конкатенации) строк в формате 
${номер элемента} - ${значение элемента}\n , где \n - спецсимвол переноса.

Нумерация должна начинаться с 1. 
К примеру для первого элемента массива ['Mango', 'Poly', 'Ajax'] с индексом 0 
будет выведено '1 - Mango', а для индекса 2 выведет '3 - Ajax'.

Используйте вспомогательную переменную result для добавления (конкатенации) строк внутри цикла for*/

const getItemsString = function (array) {
    let result = '';
    for (let i = 0; i < array.length; i +=1){
    result =result.concat(`${i+1} - ${array[i]}\n`);
    }
     return (result);
}

const logItems = (['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);


const logItems2 =([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

console.log(getItemsString (logItems));
getItemsString (logItems2);