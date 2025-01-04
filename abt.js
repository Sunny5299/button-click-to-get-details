const Btn = document.querySelector(".btn1");
let paras = document.querySelector(".par");
const Btn1 = document.querySelector(".btn2");
let paras1 = document.querySelector(".par1");
const Btn2 = document.querySelector(".btn3");
let paras2 = document.querySelector(".par2");

function bydefault(){
paras.style.display = "none"
paras1.style.display = "none"
paras2.style.display = "none"
}


function hideshowpara1(){
    if(paras.style.display === "none")
       paras.style.display = "block";
       paras1.style.display = "none"
       paras2.style.display = "none"
}

function hideshowpara2(){
    if(paras1.style.display === "none")
        paras1.style.display = "block";
        paras.style.display = "none"
        paras2.style.display = "none"
}

function hideshowpara3(){
    if(paras2.style.display === "none")
        paras2.style.display = "block";
        paras.style.display = "none"
        paras1.style.display = "none"
}
bydefault()

Btn.addEventListener("click",hideshowpara1);
Btn1.addEventListener("click",hideshowpara2);
Btn2.addEventListener("click",hideshowpara3);