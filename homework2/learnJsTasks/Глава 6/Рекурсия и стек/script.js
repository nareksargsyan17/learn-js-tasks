// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + 
function sumTo(n) {
  if (n == 0) {
    return n;
  } else {
    return n + sumTo(n - 1);
  }
}
console.log(sumTo(100));

function sumToOptimal(n) {
  return n * (n + 1) / 2;
}

console.log(sumToOptimal(100));

// Задача – написать функцию factorial(n), которая возвращает n!, используя рекурсию.

function factorial(n) {
  return n == 1 ? 1 : n * factorial(n - 1);
}
console.log(factorial(4));

function fibonachi(n) {
  return n <= 1 ? n : fibonachi(n - 1) + fibonachi(n - 2);
}
console.log(fibonachi(4));


let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};


//recursion
function printList(list) {
  console.log(list.value);
  if (list.next) {
    printList(list.next);
  }
}

printList(list);

//loop

function printListLoop(list) {
  do {
    console.log(list.value);
    list = list.next;
  } while (list)

}

printListLoop(list);

//revers list

function printReverseList(list) {
  if (list.next) {
    printReverseList(list.next);
  }
  console.log(list.value);
}

printReverseList(list);

function printReverseListLoop(list) {
  let arr = [];
  let index = 0;
  do {
    arr[index] = list.value;
    index++
    list = list.next;
  } while (list);
  while (index >= 0) {
    console.log(arr[index]);
    index--;
  }

}
printReverseListLoop(list)