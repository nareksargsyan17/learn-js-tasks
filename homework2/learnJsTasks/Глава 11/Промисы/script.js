// let promise = new Promise(function (resolve, reject) {
//   resolve(1);

//   setTimeout(() => resolve(2), 1000);
// });

// promise.then(alert); // 1


function delay(ms) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("w");
    }, ms)
  })
}

delay(3000).then(() => console.log('выполнилось через 3 секунды'));

