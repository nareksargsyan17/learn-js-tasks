// Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.

// Для вывода используйте alert.

let date = new Date(2012, 1, 20, 3+4, 12);
console.log(date);

// Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

// Например:

date = new Date(2012, 0, 3);  // 3 января 2012 года

function getWeekDay(date){
  switch(date.getDay()){
    case 0 : console.log("ВС"); break;
    case 1 : console.log("ПН"); break;
    case 2 : console.log("ВТ"); break;
    case 3 : console.log("СР"); break;
    case 4 : console.log("ЧТ"); break;
    case 5 : console.log("ПТ"); break;
    case 6 : console.log("СБ"); break;
  }
}
getWeekDay(date);

// В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2) и так до воскресенья (номер 7). Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.

date = new Date(2012, 0, 3);  // 3 января 2012 года
function getLocalDay(date){
  return date.getDay() == 0 ? 7 : date.getDay();
}

console.log( getLocalDay(date) );       // вторник, нужно показать 2


// Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.

// К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.

// Функция должна надёжно работать при значении days=365 и больших значениях:

date = new Date(2015, 0, 2);

function getDateAgo(date, days){
  date.setDate(date.getDate() - days)
  return date;
}

console.log( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
console.log( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
console.log( getDateAgo(date, 365) ); // 2, (2 Jan 2014)

// Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.

// Параметры:

// year – год из четырёх цифр, например, 2012.
// month – месяц от 0 до 11.
// К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).

function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}

console.log( getLastDayOfMonth(2012, 0) ); // 31
console.log( getLastDayOfMonth(2012, 1) ); // 29
console.log( getLastDayOfMonth(2013, 1) ); // 28
