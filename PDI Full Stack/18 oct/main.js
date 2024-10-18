import { add } from "./math.js";

document.getElementById("calculate").addEventListener('click',
    ()=>{
            const res= add(9,7);
            alert(`Answer is ${res}`);    
    }
)