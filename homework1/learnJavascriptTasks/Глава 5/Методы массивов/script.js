// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

// То есть дефисы удаляются, а все слова после них получают заглавную букву.

function camelize(str){
  str = str.split("-").map((elem,index)=>{
    return index == 0 ? elem : elem[0].toUpperCase() + elem.slice(1);
  }).join("");
  return str;
}
console.log(camelize("background-color"));

// 
// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.

// Функция должна возвращать новый массив и не изменять исходный.

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

function filterRange(arr, a, b){
  return arr.filter(elem => elem >= a && elem <= b)
}
console.log(filtered);

// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.

// Функция должна изменять принимаемый массив и ничего не возвращать.

function filterRangeInPlace(arr, a, b){
  arr = arr.filter(elem => elem >= a && elem <= b);
  return arr;
}
console.log(filterRangeInPlace(arr, 1, 4));



// Сортировать в порядке по убыванию
arr = [5, 2, 1, -10, 8];
arr.sort((a,b)=>b-a);
console.log(arr);

// Создать расширяемый калькулятор

function Calculator(){
  this.methods = {
    "-" : (a,b)=>a-b,
    "+" : (a,b)=>a+b
  }
  this.calculate = function(str){
    str = str.split(" ");
    return this.methods[str[1]](+str[0], +str[2])
  }
  this.addMethods = (method, func)=>{
    this.methods[method] = func;
  }
}

let calc = new Calculator;

console.log( calc.calculate("3 + 7") ); // 10



// У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(elem => elem.name);
console.log( names ); // Вася, Петя, Маша


// У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.

// Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.


vasya = { name: "Вася", surname: "Пупкин", id: 1 };
petya = { name: "Петя", surname: "Иванов", id: 2 };
masha = { name: "Маша", surname: "Петрова", id: 3 };

users = [ vasya, petya, masha ];

let usersMapped = users.map(elem =>{
  return {fullName : elem.name + " " + elem.surname, id : elem.id}
})


console.log( usersMapped[0].id ) // 1
console.log( usersMapped[0].fullName ) // Вася Пупкин


// Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.

vasya = { name: "Вася", age: 25 };
petya = { name: "Петя", age: 30 };
masha = { name: "Маша", age: 28 };

arr = [ vasya, petya, masha ];

sortByAge(arr);
function sortByAge(arr){
  return arr.sort((a,b)=>a.age-b.age)
}
// теперь: [vasya, masha, petya]
console.log(arr[0].name); // Вася
console.log(arr[1].name); // Маша
console.log(arr[2].name); // Петя

// Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.

// Многократные прогоны через shuffle могут привести к разным последовательностям элементов.

arr = [1, 2, 3];

function shuffle(arr){
  let newArr = [];
  let randomNum;
  function random(arr){
    return Math.floor(Math.random() * arr.length);
  }
  while(arr.length > 0){
    randomNum = random(arr);
    newArr.push(arr[randomNum]);
    arr.splice(randomNum, 1);
  }
  return newArr; 
}

arr = shuffle(arr);
console.log(arr);
// arr = [3, 2, 1]
arr = shuffle(arr);
console.log(arr);
// arr = [2, 1, 3]

arr = shuffle(arr);
console.log(arr);
// arr = [3, 1, 2]



// Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.

// Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.

vasya = { name: "Вася", age: 25 };
petya = { name: "Петя", age: 30 };
masha = { name: "Маша", age: 29 };

arr = [ vasya, petya, masha ];

function getAverageAge(arr){
  let sum = 0;
  arr.forEach(element => {
    sum+=element.age;
  });
  return sum/arr.length
}

console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

// Пусть arr – массив строк.

// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.


function unique(arr) {
  let newArr = [];
  arr.forEach((elem)=> {
    if(!newArr.includes(elem)){
      newArr.push(elem)
    }
  });
  return newArr;
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

console.log( unique(strings) ); // кришна, харе, :-O


// Допустим, мы получили массив пользователей в виде {id:..., name:..., age:... }.

// Создайте функцию groupById(arr), которая создаст из него объект с id в качестве ключа и элементами массива в качестве значений.


users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

function groupById(users){
  let result = {}
  users.forEach(elem =>{
    result[elem.id] = elem;
  })
  return result;
}

let usersById = groupById(users);
console.log(usersById);
/*
// после вызова у нас должно получиться:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/