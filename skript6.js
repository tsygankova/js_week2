//скрипт, который заменяет регистр каждого символа в строке на противоположный

const a = 'JAVascIPT';
const letters = a.split('');
console.log (letters);
let invertedString = '';

for (const letter of letters){
    if (letter === letter.toUpperCase()){
        console.log ('эта буква в верхнем регистре', letter);
        invertedString += letter.toLowerCase();
    } else {
        console.log ('эта буква в нижнем регистре', letter);
        invertedString += letter.toUpperCase();
    }
}

console.log ('invertedString',  invertedString);

for (const letter of letters){
const isEqual = letter === letter.toLowerCase()
invertedString += isEqual ? letter.toUpperCase () : letter.toLowerCase ();
console.log ('invertedString',  invertedString);}
