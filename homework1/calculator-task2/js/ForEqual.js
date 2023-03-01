import { ui } from "./UI.js";

export default function ForEqual(arg = ""){
    try{
        ui.action.textContent = eval(ui.action.textContent);
    }catch{
        ui.action.textContent = eval(ui.action.textContent.slice(0,ui.action.textContent.length-1));
        ui.answer.textContent = ui.answer.textContent.slice(0,ui.answer.textContent.length-1);
    }
    if(arg != ""){
        ui.count = 0;
        ui.answer.textContent = ui.action.textContent;
    }
    return ui.count
}
