// function f() {
//   alert(this); // null
// }

// let user = {
//   g: f.bind(null)
// };

// user.g();


// function sayHi() {
//   alert(this.name);
// }
// sayHi.test = 5;

// let bound = sayHi.bind({
//   name: "Вася"
// });

// alert(bound.test); // что выведет? undefined



// function askPassword(ok, fail) {
//   let password = 'ss';
//   if (password == "rockstar") ok.bind(user)();
//   else fail.bind(user)();
// }

// let user = {
//   name: 'Вася',

//   loginOk() {
//     console.log(`${this.name} logged in`);
//   },

//   loginFail() {
//     console.log(`${this.name} failed to log in`);
//   },

// };

// askPassword(user.loginOk, user.loginFail);


function askPassword(ok, fail) {
  let password = " l";
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'John',

  login(result) {
    console.log(this.name + (result ? ' logged in' : ' failed to log in'));
  }
};

askPassword(() => user.login(true), () => user.login(false)); // 