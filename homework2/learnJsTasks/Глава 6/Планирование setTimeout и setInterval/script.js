// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

// Сделайте два варианта решения.

// Используя setInterval.
// Используя рекурсивный setTimeout.

function printNumbers(from, to) {
  let timing = setInterval(() => {
    if (from <= to) {
      console.log(from++);
    } else {
      clearInterval(timing)
    }
  }, 1000)
}
// printNumbers(7, 20);

function printNumbers1(from, to) {
  if (from <= to) {
    setTimeout(() => {
      console.log(from++);
      printNumbers1(from, to)
    }, 1000)
  }
}
printNumbers1(7, 20)



// В приведённом ниже коде запланирован вызов setTimeout, а затем выполняется сложное вычисление, для завершения которого требуется более 100 мс.

// Когда будет выполнена запланированная функция?

// После цикла.
// Перед циклом.
// В начале цикла.
// Что покажет alert?

let i = 0;

setTimeout(() => alert(i), 100); //  100000000

// предположим, что время выполнения этой функции >100 мс
for (let j = 0; j < 100000000; j++) {
  i++;
}