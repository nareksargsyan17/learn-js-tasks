// Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.
let num1 = +prompt("Введите первое число");
let num2 = +prompt("Введите второе число");

alert( num1 + num2 );


// Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.

// Функция должна возвращать числовое значение.

// Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.

function readNumber() {
    let num;
  
    do {
      num = +prompt("Введите число");
    } while ( typeof num == "number" );
  
    if (num === null || num === '') return null;
  
    return num;
  }
  
  alert(readNumber());


//   Этот цикл – бесконечный. Он никогда не завершится, почему?

let i = 0;
while (i != 10) {
  i += 0.2;
}

// Потому что i никогда не станет равным 10.



// Встроенный метод Math.random() возвращает случайное число от 0 (включительно) до 1 (но не включая 1)

// Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max).

// Пример работы функции:

function random(min, max){
    return Math.random()*(max -min) + min
}
console.log(random(-5, 5))