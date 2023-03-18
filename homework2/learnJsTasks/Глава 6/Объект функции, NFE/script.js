function makeCounter() {
  let count = 0;

  function counter() {
    return count++;
  }

  counter.set = (val) => count = val;
  counter.decrease = () => count--;

  return counter;
}

function sum(a) {

  function func(b) {
    a += b;
    return func;
  }

  func.toString = function () {
    return a;
  };

  return func;
}
alert(sum(1)(2)(10));
  // sum(1)(2) == 3; // 1 + 2
  // sum(1)(2)(3) == 6; // 1 + 2 + 3
  // sum(5)(-1)(2) == 6
  // sum(6)(-1)(-2)(-3) == 0
  // sum(0)(1)(2)(3)(4)(5) == 15