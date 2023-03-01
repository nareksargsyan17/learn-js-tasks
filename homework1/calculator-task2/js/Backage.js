export default function Backage(obj){
    obj.backage.addEventListener("click", ()=>{
        if(obj.action.textContent == obj.answer.textContent){
            obj.action.textContent = obj.action.textContent.slice(0,obj.action.textContent.length-1);
            obj.answer.textContent = obj.answer.textContent.slice(0,obj.answer.textContent.length-1);
        }else{
            obj.action.textContent = obj.action.textContent.slice(0,obj.action.textContent.length-1);
        }
    })
}