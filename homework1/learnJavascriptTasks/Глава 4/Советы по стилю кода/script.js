// Напишите код, выполнив задание из каждого пункта отдельной строкой:

// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.

const user = {};
user.name = "John";
user.surName = "Smith";
user.name = "Pete";
delete user.name;

// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

// Должно работать так:

let schedule = {};
function isEmpty(obj){
  for(let keys in obj){
    return false;
  }
  return true;
}
alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false


//
const user = {
  name: "John"
};

// это будет работать?
user.name = "Pete";
// да будет работать, потому что это ссилка этого обьекта.





//

// У нас есть объект, в котором хранятся зарплаты нашей команды:

// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

// Если объект salaries пуст, то результат должен быть 0.

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
let sum = 0;
for(let keys in salaries){
  sum += salaries[keys];
}
console.log(sum);



//

// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

// Например:

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);
function multiplyNumeric(obj){
  for(let keys in obj){
    if(typeof obj[keys] == "number"){
      obj[keys] *= 2;
    }
  }
}