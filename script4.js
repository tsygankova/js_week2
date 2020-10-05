//скрипт поиска наименьшего числа среди уникальных чисел в массиве

const a = [56, 18, 35, 4, 78, 9, 10, 45];

let smallest = a[0];

for (let number of a){
    if ( number < smallest){
    smallest = number;}
    else {smallest = smallest;}
    // } else {console.log ('sorry, you have lost', number);}
}
console.log ('it is the smallest', smallest);