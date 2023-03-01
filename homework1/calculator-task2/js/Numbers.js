export default function Numbers(obj){
    obj.numbers.forEach(elem =>{
        elem.addEventListener("click",()=>{
            if(obj.action.textContent == "0"){
                obj.action.textContent = elem.textContent;
                obj.answer.textContent = elem.textContent;
            }else{
                obj.action.textContent += elem.textContent;
                obj.answer.textContent += elem.textContent;
            }
        })
    })
}