//1
let i = 3;

while (i) {
  alert( i-- );
}


//while(i) i = 3 alert(i--) i = 3
//while(i) i = 2 alert(i--) i = 2
//while(i) i = 1 alert(i--) i = 1 => last iteration
//while(i) i = 0 => false


//2
i = 0;
while (++i < 5) alert( i ); // 1, 2, 3, 4

i = 0;
while (i++ < 5) alert( i ); // 1, 2, 3, 4, 5

//3
for (let i = 0; i < 5; i++) alert( i ); // 0, 1, 2, 3, 4
for (let i = 0; i < 5; ++i) alert( i ); // 0, 1, 2, 3, 4


//4
for(let i = 2; i<=10; i+=2) alert(i);

//5 for to while
for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}

i = 0;
while(i<3){
  alert( `number ${i}!` );
  i++;
}


//6
let promptNum;
do{
  promptNum = +prompt("type a number");
}while(!(promptNum > 100));

//7
let num = 20
for(let i = 2; i <= num; i++){
  if(!(i % 2 == 0 || i % 3 == 0 || i % 5 == 0 || i % 7 == 0) || i == 2 || i == 3 || i == 5 || i == 7){
    console.log(i);
  }
}
