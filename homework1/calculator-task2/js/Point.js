export default function Point(obj){
    obj.point.addEventListener("click", ()=>{
        let last = obj.action.textContent[obj.action.textContent.length-1];
        if(last != "-" && last != "+" && last != "/" && last != "*" && last != "."){
            obj.action.textContent += ".";
            obj.answer.textContent += ".";
        }
    })
}