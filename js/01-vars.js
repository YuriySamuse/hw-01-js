// const age =10;
// const totalPrice = 200.74;
// const userName = 'Chelsy';
// const message = 'Добро пожиловать!';
// const isOpen = true;
// const shuldConfirm = false;

// console.log (isOpen);

// const type = typeof isOpen;

// console.log ('Do');

// alert('bsutrsjtrdkyt');
// console.log('after');

//-----Example 1 - Ввод пользователя и ветвления

// const result = prompt("Какое официальное название JavaScript?");
// console.log (result);

// if (result === 'ECMAScript') {
//     console.log ('Верно');
// } else {
//     console.log ("Не знаете? ECMAScript!");
// }

///---------Example 2 - Отображение времени (if...else)----

// const hours = 14;
// const minutes = 0;

// let timestring;

// if (minutes>0){
//     timestring = `${hours} h. ${minutes} m.`;
// } else {
//     timestring = `${hours} h.`;
// }

// console.log (timestring);


//------Example 3 - Ветвеления------

// const userInput = prompt('Введите число');

// if (parseInt(userInput) > 0) {
//     console.log('Это положительное число');
// } 
//     else  if(parseInt(userInput) < 0) {

//     console.log('Это отрицательное число');
    
// } else  if (parseInt(userInput) === 0) {
//     console.log('Это ноль');
// } else {
//     console.log ('Not a number!!!');
// }

//-------Example 4 - Вложенные ветвления------

// const a = 101;
// const b = 1000;



// if (a > 100 && b > 100) {

    //case 1

    // if (a > b) {
    //     console.log (a);
    // } else {
    //     console.log (b + 512);
    // }

    //case 2

    // const max = a > b ? a : b + 512; 
    // console.log (max);

    //case 3 

//     console.log (Math.max (a, b));
// }
// else {
//     console.log (b + 512);
// }
 
//-------- Example 5 - Форматирование ссылки (endsWith)----------

// let link = 'https://my-site.com/about';
// // Пиши код ниже этой строки
//     if (!link.endsWith('/')) {
//         link = `${link}/`
//     }
// // Пиши код выше этой строки
// console.log(link);


//--------Example 6 - Форматирование ссылки (includes и логическое «И»)------


// let link = 'https://somesite.my-syte.com/about';
// // Пиши код ниже этой строки
// if (!link.endsWith('/') && link.includes ('my-syte')) {

//         link = `${link}/`
//     }

// // Пиши код выше этой строки
// console.log(link);


//-------Example 7 - Форматирование ссылки (тернарный оператор)-----

// let link = 'https://somesite.com/about';
// // if (link.includes('my-site') && !link.endsWith('/')) {
// //   link += '/';
// // }
// const result = link.includes('my-site') ? !link.endsWith('/') : link += '/';

// console.log(result);

//------Example 8 - if...else и логические операторы-----

// const hours = 25;

// if (hours < 17) {
//     console.log ("Pending");
// } else if(hours >= 17 && hours <= 24){ 
//     console.log ("Expiriens");
// } else {
//     console.log ("Overdue");
// }