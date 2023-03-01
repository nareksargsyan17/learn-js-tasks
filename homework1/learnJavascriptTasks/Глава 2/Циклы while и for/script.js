
//1
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Родители разрешили?');
  }
}
function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Родители разрешили?');
}

//two variant are true


//2 
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}


// "?"
function checkAge(age){
  return age > 18 ? true : confirm("Родители разрешили?");
}

// ||
function checkAge(age){
  return age > 18 || confirm("Родители разрешили?");
}


//3

function min(a, b){
  return a > b ? a : b;
}
min(-5, 7);

//4
 
function pow(x, n){
  let res = x;
  for(let i = 1; i < n; i++){
    res *= x;
  }
  return res;
}
let x = 5;
let n = 7;
if(x < 1){
  console.log("Error x not natural number");
}else{
  console.log(pow(x, n));
}