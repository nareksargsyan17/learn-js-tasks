// Напишите деструктурирующее присваивание, которое:

// свойство name присвоит в переменную name.
// свойство years присвоит в переменную age.
// свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)

let user = {
  name: "John",
  years: 30
};

let {name, years : age, isAdmin = false} = user;



console.log( age , name, isAdmin); 

// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
// P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
function topSalary(salaries){
  let max = 0;
  let thisName = null;
  for(let [name, salary] of Object.entries(salaries)){
    if(salary > max){
      max = salary;
      thisName = name;
    }
  }
  return thisName;
}