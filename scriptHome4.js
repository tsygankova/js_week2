/*   Форматирование строки в зависимости от длинны строки
Напиши функцию formatString(string, maxLength = 40) которая принимает строку и форматирует ее если необходимо.

Если длина строки не превышает maxLength, функция возвращает ее в исходном виде.
Если длина больше maxLength, то функция обрезает строку до размера maxLength символов и 
добавляет в конец строки троеточие ..., после чего возвращает укороченную версию.*/

const formatString = function (string, maxLength = 40){
    let array = string.split('');
    if (array.length > maxLength) {
        let newArray = array.splice (maxLength, array.length - maxLength);
        array.splice (maxLength, 0, "...");
        return array.join('')
    } return string;
}

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
'Curabitur ligula sapien, tincidunt non.'

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
'Vestibulum facilisis, purus nec pulvinar...'

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30));
'Vestibulum facilisis, purus ne...'

