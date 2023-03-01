//Возможно ли создать функции A и B, чтобы new A() == new B()?
let obj = {name : "John"};

function A() { return obj; }
function B() { return obj; }

alert( new A() == new B() );


// Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму этих свойств.
// mul() возвращает произведение этих свойств.

function Calculator(){
  this.read = function(){
    this.num1 = +prompt("type a number");
    this.num2 = +prompt("type a number");
  };
  this.sum = function(){
    return this.num1 + this.num2; 
  }
  this.mul = function(){
    return this.num1 * this.num2; 
  }
}
let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );


// Создайте функцию-конструктор Accumulator(startingValue).

// Объект, который она создаёт, должен уметь следующее:

// Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
// Метод read() должен использовать prompt для считывания нового числа и прибавления его к value.
// Другими словами, свойство value представляет собой сумму всех введённых пользователем значений, с учётом начального значения startingValue.

function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function() {
    this.value += +prompt('multiplate a number', 0);
  };

}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);