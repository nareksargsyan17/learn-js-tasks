import { marks } from "./parent.js";
export default function WordsCounter(str){
    str = str.split(" ");
    const obj = {};
    str.forEach((element,index) => {
        element = element.toLowerCase();
        if(element[element.length-1] == marks[element[element.length-1]]){
            element = element.slice(0, element.length-1);
        }
        if(obj[element] >= 1){
            obj[element] += 1;
        }else{
            obj[element] = 1;
        }
    });
    let keys  = Object.keys(obj);
    let result = "";
    for(let i = 0; i < keys.length; i++){
        result += `${keys[i]} - ${obj[keys[i]]} \n`;
    }
    return result;
}