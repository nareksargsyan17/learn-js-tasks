// Function.prototype.defer = function(ms) {
//   setTimeout(this, ms);
// };

// function f() {
//   alert("Hello!");
// }

// f.defer(1000);

Function.prototype.defer = function (ms) {
  return function () {
    setTimeout(() => {
      this;
    }, ms);
  }
}
function f(a, b) {
  console.log(a + b);
}

f.defer(1000)(1, 2);