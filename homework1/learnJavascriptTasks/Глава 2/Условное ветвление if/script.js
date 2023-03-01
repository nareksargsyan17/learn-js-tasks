
//1
if ("0") { 
    alert( 'Привет' );//Привет
}

//2

let number = +prompt("input a number");

if(number > 0){
    alert(1);
}else if(number < 0){
    alert(-1);
}else{
    alert(0);
}

//3

let result;

if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}

// Ответ

a + b < 4 ? result = "Мало" : result = "Много";


//4

let message;

if (login == 'Сотрудник') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}

// Ответ

message = login == 'Сотрудник' ? 'Привет' : 
login == 'Директор' ? 'Здравствуйте' :
login == '' ? 'Нет логина' : '';
