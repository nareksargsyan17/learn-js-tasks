// function Rabbit() { }
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();

// Rabbit.prototype = {};

// alert(rabbit.eats); // undefined

// function Rabbit() { }
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();

// Rabbit.prototype.eats = false;

// console.log(rabbit.eats); // false

// function Rabbit() { }
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();

// delete rabbit.eats;

// console.log(rabbit.eats); // true

function Rabbit() { }
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

delete Rabbit.prototype.eats;

alert(rabbit.eats); // undefined


function Obj(name) {
  this.name = this.name;
}

let obj = new Obj("Poxos")
let obj2 = new obj.constructor("Petros");