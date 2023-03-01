import { marks } from "./parent.js";
export default function TrueSpace(str){
    let result = "";
    str = str.split("");
    for(let i = 0; i < str.length; i++){
        if(str[i] == " " && (str[i+1] == " " || str[i+1] == marks[str[i+1]])){
            str.splice(i, 1);
            i--;
        }else if(str[i] == marks[str[i]] && str[i+1] != " "){
            result += marks[str[i]] + " ";
        }else{
            result += str[i];
        }
    }
    return result;
}