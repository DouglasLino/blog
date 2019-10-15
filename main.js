var button_1 = document.getElementById("button_1")
var capitulo_1 = document.getElementById("capitulo_1");


var button_2 = document.getElementById("button_2")
var capitulo_2 = document.getElementById("capitulo_2");

var button_3 = document.getElementById("button_3")
var capitulo_3 = document.getElementById("capitulo_3");

var button_4 = document.getElementById("button_4")
var capitulo_4 = document.getElementById("capitulo_4");

var button_5 = document.getElementById("button_5")
var capitulo_5 = document.getElementById("capitulo_5");

button_1.addEventListener("click",(event)=>{
    capitulo_1.style.display="block";
    capitulo_2.style.display="none";
    capitulo_3.style.display="none";
    capitulo_4.style.display="none";
    capitulo_5.style.display="none";
});


button_2.addEventListener("click",(event)=>{
    capitulo_1.style.display="none";
    capitulo_2.style.display="block";
    capitulo_3.style.display="none";
    capitulo_4.style.display="none";
    capitulo_5.style.display="none";
});

button_3.addEventListener("click",(event)=>{
    capitulo_1.style.display="none";
    capitulo_2.style.display="none";
    capitulo_3.style.display="block";
    capitulo_4.style.display="none";
    capitulo_5.style.display="none";
});

button_4.addEventListener("click",(event)=>{
    capitulo_1.style.display="none";
    capitulo_2.style.display="none";
    capitulo_3.style.display="none";
    capitulo_4.style.display="block";
    capitulo_5.style.display="none";
});

button_5.addEventListener("click",(event)=>{
    capitulo_1.style.display="none";
    capitulo_2.style.display="none";
    capitulo_3.style.display="none";
    capitulo_4.style.display="none";
    capitulo_5.style.display="block";
});

