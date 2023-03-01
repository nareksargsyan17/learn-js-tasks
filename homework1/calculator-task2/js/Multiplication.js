export default function Multiplication(obj, review){
    obj.multiplicationBtn.addEventListener("click", (btn)=>{
        review();
        obj.action.textContent += "*";
        obj.answer.textContent += "*";
    })
}