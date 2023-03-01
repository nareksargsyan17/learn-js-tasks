export default function Plus(obj, review){
    obj.plusBtn.addEventListener("click", (btn)=>{
        review();
        obj.action.textContent += "+";
        obj.answer.textContent += "+";
    })
}