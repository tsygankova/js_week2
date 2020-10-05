/* написать скрипт поиска логина
если логин найден, вывести сообщение `Пользователь ${} найден`
если логин не найден `Пользователь ${} не найден`

 - через for
 - через for ... of
- логика break
- через includes с тернарным оператором
*/

const login = ['umrao', 'shmutza', 'tsyganek', 'instead', 'tsy_kata'];
const loginToFind = 'umro';

for (let i = 0; i < login.length; i +=1) {
    if (login.includes (loginToFind)){
        console.log (`Пользователь ${loginToFind} найден`);
    } else{
    console.log (`Пользователь ${loginToFind} не найден`);}
}

for (let username of login) {
    login.includes (loginToFind) ? console.log (`Пользователь ${loginToFind} найден`) : console.log (`Пользователь ${loginToFind} не найден`);
}

login.indexOf(loginToFind);
if(login.indexOf(loginToFind) !== -1){
    console.log (`Пользователь ${loginToFind} найден`);
} else {console.log (`Пользователь ${loginToFind} не найден`);}
