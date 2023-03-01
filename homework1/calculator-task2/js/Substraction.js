export default function Substraction(obj, review){
    obj.subtractionBtn.addEventListener("click", (btn)=>{
        review();
        obj.action.textContent += "-";
        obj.answer.textContent += "-";
    })
}