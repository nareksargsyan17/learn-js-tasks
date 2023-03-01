import ForEqual from './ForEqual.js';
export default function Review(){
    let count = ForEqual();
    if(count == 0){
        count++;
    }else{
        ForEqual();
    }
}