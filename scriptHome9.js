/*Есть массив logins с логинами пользователей. 
Напиши скрипт добавления логина в массив logins. Добавляемый логин должен:

проходить проверку на длину от 4 до 16-ти символов включительно
быть уникален, то есть отсутствовать в массиве logins
Разбей задачу на подзадачи с помощью функций.
Проверку на отсутствие аргументов или на правильный тип аргументов делать не нужно.

Напиши функцию isLoginValid(login), 
в которой проверь количество символов параметра 
login и верни true или false в зависимости от того, 
попадает ли длина параметра в заданный диапазон 
от 4-х до 16-ти символов включительно.

Напиши функцию isLoginUnique(allLogins, login), 
которая принимает список всех логинов 
и добавляемый логин как параметры 
и проверяет наличие login в массиве allLogins, в
озвращая true если такого логина еще нет и false если логин уже используется.

Напиши функцию addLogin(allLogins, login) которая:

Принимает новый логин и массив всех логинов как параметры
Проверяет валидность логина используя вспомогательную функцию isLoginValid

Если логин не валиден, 
прекратить исполнение функции addLogin 
и вернуть строку 'Ошибка! Логин должен быть от 4 до 16 символов'

Если логин валиден, 
функция addLogin проверяет уникальность логина 
с помощью функции isLoginUnique

Если isLoginUnique вернет false, 
тогда addLogin не добавляет логин в массив 
и возвращает строку 'Такой логин уже используется!'

Если isLoginUnique вернет true, 
addLogin добавляет новый логин в logins 
и возвращает строку 'Логин успешно добавлен!'*/

const isLoginValid = function (login, min = 4, max = 16) {
    return String(login).split('').length <=max && String (login).split ('').length >=min;
}

console.log (isLoginValid ('tsyganek'));
console.log (isLoginValid (1234567890123456))
console.log (isLoginValid(1234))

const isLoginUnique = function (allLogins, login){
 return !allLogins.includes(login)   
}

// const logins = ['tsyganek', 'mintenegro', 'boris', 'bird', 'umrao']

// console.log (isLoginUnique (logins, 'tsyganek'));
// console.log (isLoginUnique (logins, 'umrao'))
// console.log (isLoginUnique (logins,'tomas'))

const addLogin = function (allLogins, login) {
 if (isLoginValid (login) === true) {
     if (isLoginUnique (allLogins, login) === true ){
    allLogins.push(login);
        return 'Логин успешно добавлен!';
     } return 'Такой логин уже используется!';
   } return 'Ошибка! Логин должен быть от 4 до 16 символов'
 }   
 

// console.log (addLogin (logins, 'tsyganek'));
// console.log (addLogin (logins, 'umrao'))
// console.log (addLogin (logins,'tomas'))
// console.log (addLogin (logins,'aloe'))

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

console.log(addLogin(logins, 'Ajax')); 
'Логин успешно добавлен!'
console.log (logins);

console.log(addLogin(logins, 'robotGoogles')); 
'Такой логин уже используется!'
console.log (logins);


console.log(addLogin(logins, 'Zod'));
'Ошибка! Логин должен быть от 4 до 16 символов'
console.log (logins);


console.log(addLogin(logins, 'jqueryisextremelyfast')); 
'Ошибка! Логин должен быть от 4 до 16 символов'
console.log (logins);

console.log(addLogin(['1234', '12345'],'4444')); 
console.log(addLogin(['1234', '12345'],'1234')); 


