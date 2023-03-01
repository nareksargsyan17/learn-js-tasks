// У вас есть к ним доступ, но управление этим массивом происходит где-то ещё. Добавляются новые сообщения и удаляются старые, и вы не знаете в какой момент это может произойти.

// Имея такую вводную информацию, решите, какую структуру данных вы могли бы использовать для ответа на вопрос «было ли сообщение прочитано?». Структура должна быть подходящей, чтобы можно было однозначно сказать, было ли прочитано это сообщение для каждого объекта сообщения.


let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

let message = new WeakSet();
message.add(messages[0]);
message.add(messages[1]);
message.add(messages[0]);
function readMessages(index){
  if(message.has(messages[index])){
    console.log("Readed message ");
    messages.splice(index, 1);
  }else{
    console.log("Nooo ");
  }
}
readMessages(2);

// Теперь вопрос стоит так: какую структуру данных вы бы предложили использовать для хранения информации о том, когда сообщение было прочитано?

// В предыдущем задании нам нужно было сохранить только факт прочтения «да или нет». Теперь же нам нужно сохранить дату, и она должна исчезнуть из памяти при удалении «сборщиком мусора» сообщения.

// P.S. Даты в JavaScript можно хранить как объекты встроенного класса Date, которые мы разберём
function forDate(index){
  if(message.has(messages[index])){
    console.log(new Date());
    messages.splice(index, 1);
  }else{
    console.log("Nooo ");
  }
  console.log(message);
}
forDate(1)
