export default function Capitalize(str){
    str = str.split("");
    str[0] = str[0].toUpperCase();
    for(let i = 1; i < str.length; i++){
        if(str[i] == " "){
            str[i+1] = str[i+1].toUpperCase();
            i++;
        }else{
            str[i] = str[i].toLowerCase();
        }
    }
    return str.join("");
}
