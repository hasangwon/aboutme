"use strict";
const content = "저는 하상원입니다"
const text = document.querySelector(".text")
let index = 0;

 function sleep(delay){ 
     const start = new Date().getTime(); 
     while (new Date().getTime() < start + delay); 
    }

function typing(){
    text.textContent += content[index++];
    if(index > content.length){
        text.textContent = ""
        index = 0;
        sleep(1000);
    }
}
setInterval(typing, 300)