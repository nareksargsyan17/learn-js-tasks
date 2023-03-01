alert( null || 2 || undefined ); // 2 
alert( alert(1) || 2 || alert(3) ); // 1, 2
alert( 1 && null && 2 ); // null
alert( alert(1) && alert(2) ); // 1, undefined
alert( null || 2 && 3 || 4 ); // 3


let age = +prompt("input a number");
if(age >= 14 && age <= 90){
    alert(age);
}

if(!(age >= 14 && age <= 90)){
    alert(age);
}
if(age < 14 && age > 90){
    alert(age);
}

if (-1 || 0) alert( 'first' ); // true => first
if (-1 && 0) alert( 'second' ); //  false => нечего
if (null || -1 && 1) alert( 'third' ); // true => third