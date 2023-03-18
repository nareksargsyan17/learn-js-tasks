//1
// function makeCounter() {
//     let count = 0;

//     return function () {
//         return count++;
//     };
// }

// let counter = makeCounter();
// let counter2 = makeCounter();

// console.log(counter()); // 0
// console.log(counter()); // 1
// console.log(counter()); // 2


// console.log(counter2()); // 0
// console.log(counter2()); // 1
//функция вазвращает функцю, и сколько раз мы звоним столько раз и добавляет пред. + 1


//2
// function Counter() {
//     let count = 0;

//     this.up = function () {
//         return ++count;
//     };
//     this.down = function () {
//         return --count;
//     };
// }

// let counter = new Counter();

// alert(counter.up()); // 1
// alert(counter.up()); // 2
// alert(counter.down()); // 1



// Посмотрите на код. Какой будет результат у вызова на последней строке?
// let phrase = "Hello";

// if (true) {
//     let user = "John";

//     function sayHi() {
//         console.log(`${phrase}, ${user}`);
//     }
// }

// sayHi();

//будет ошибка, потому что user внутри блока а sayHi создается во время звонка и не видит user


// Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.

// Да, именно таким образом, используя двойные круглые скобки (не опечатка).

// function sum(a) {
//     return function (b) {
//         return b + a;
//     }
// }
// console.log(sum(1)(2));


/* .. ваш код для inBetween и inArray */
let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6

console.log(arr.filter(inArray([1, 2, 10]))); // 1,2

function inBetween(a, b) {
    return function (elem) {
        return elem >= a && elem <= b
    }
}
function inArray(arr) {
    return function (elem) {
        for (let i = 0; i < arr.length; i++) {
            if (elem == arr[i]) {
                return true;
            }
        }
    }
}


let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];
console.log(users.sort(byField('name')));
console.log(users.sort(byField('age')));

function byField(field) {
    return (a, b) => {
        return a[field] > b[field] ? 1 : -1;
    }
}


function makeArmy() {

    let shooters = [];

    for (let i = 0; i < 10; i++) {
        let shooter = function () { // функция shooter
            console.log(i); // должна выводить порядковый номер
        };
        shooters.push(shooter);
    }

    return shooters;
}

let army = makeArmy();

army[0](); // 0
army[5](); // 5