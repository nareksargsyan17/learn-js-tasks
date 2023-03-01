// Создайте объект calculator (калькулятор) с тремя методами:

// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.

let calculator = {
  read(num1, num2){
    this.num1 = num1;
    this.num2 = num2;
  },
  sum(){
    return this.num1 + this.num2;
  },
  mul(){
    return this.num1 * this.num2;
  }
};

calculator.read(5, 7);
alert( calculator.sum() );
alert( calculator.mul() );


//
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep(){ // показывает текущую ступеньку
    alert( this.step );
    return this;
  }
};
ladder.up().up().down().showStep().down().showStep();


function A() { return 5 }
function B() { return 5 }

let a = new A();
let b = new B();

console.log( a == b );