// Допустим, у нас есть массив arr.

// Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.

function unique(arr) {
  return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(values)); // Hare,Krishna,:-O


// Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr){
  let map = new Map();
  let acleanWord;
  arr.forEach(elem => {
    acleanWord = elem.toLowerCase().split("").sort().join("");
    map.set(acleanWord, elem)
  })
  return Array.from(map.values())
}

console.log( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"



// Мы хотели бы получить массив ключей map.keys() в переменную и далее работать с ними, например, применить метод .push.

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");