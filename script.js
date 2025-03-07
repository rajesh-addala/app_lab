let sec8Btn1=document.getElementById("sec8Btn1");
let sec8Btn2=document.getElementById("sec8Btn2");

let sec8BtmLeft=document.getElementById("sec8BtmLeft");
let sec8BtmRight=document.getElementById("sec8BtmRight");




sec8Btn1.onclick=function(){
    sec8BtmLeft.classList.add("sec8-btm-left-js");
    sec8BtmRight.classList.remove("sec8-btm-right-js");
    sec8Btn1.classList.toggle("btn1-js");
    sec8Btn2.classList.toggle("btn2-js");
}

sec8Btn2.onclick=function(){
    sec8BtmLeft.classList.remove("sec8-btm-left-js");

    sec8BtmRight.classList.add("sec8-btm-right-js");
    sec8Btn2.classList.toggle("btn2-js");
    sec8Btn1.classList.toggle("btn1-js");
 }

