export default function Equal(obj, forEqual){
    obj.equalBtn.addEventListener("click", ()=>{
        forEqual(2);
    })
}