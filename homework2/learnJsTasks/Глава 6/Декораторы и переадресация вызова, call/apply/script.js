// function work(a, b) {
//   alert(a + b); // произвольная функция или метод
// }

// function spy(func) {

//   function result(...args) {
//     result.calls.push(args);
//     return func.apply(this, args);
//   }

//   result.calls = [];

//   return result;
// }
// work = spy(work);

// work(1, 2); // 3
// work(4, 5); // 9

// for (let args of work.calls) {
//   alert('call:' + args.join()); // "call:1,2", "call:4,5"
// }


function f(x) {
  console.log(x);
}

function delay(f, ms) {
  return function (text) {
    setTimeout(() => {
      f(text);
    }, ms)
  }
}


let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); // показывает "test" после 1000 мс
f1500("test"); // показывает "test" после 1500 мс