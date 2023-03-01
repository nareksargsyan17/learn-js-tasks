export default function Minus(obj){
    obj.minus.addEventListener("click", ()=>{
        obj.action.textContent = eval(`${obj.action.textContent}*(-1)`);
        obj.answer.textContent = obj.action.textContent;
    })
}