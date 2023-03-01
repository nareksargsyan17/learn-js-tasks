export default function Divosion(obj, review){
    obj.divisionBtn.addEventListener("click", async (btn)=>{
        review();
        obj.action.textContent += "/";
        obj.answer.textContent += "/";
    })
}