export default function Clear(obj){
    obj.clear.forEach(elem=>{
        elem.addEventListener("click",()=>{
            obj.action.textContent = "0";
            obj.answer.textContent = "0";
        })
    })
}