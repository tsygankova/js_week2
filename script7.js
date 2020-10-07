/*сделать slug в url из заголовка статьи
должен получиться слаг с разделителями -
Название: How to Get Away With a Murder
результат: how-to-get-away-with-a-murder*/

const title = 'How to Get Away With a Murder';
console.log (typeof(title));

let titleArray
titleArray = title.split (' ');
console.log (titleArray);

let titleSlug = '';
titleSlug = titleArray.join ('-')
titleSlug = titleSlug.toLowerCase();
console.log (titleSlug);

// вариант 2

const slug = title.toLowerCase().split(" ").join('-');
console.log (slug);