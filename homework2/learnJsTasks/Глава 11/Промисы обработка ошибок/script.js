new Promise(function (resolve, reject) {
  setTimeout(() => {
    throw new Error("Whoops!"); // сначала это работает
  }, 1000);
}).catch(alert);