
//1)-glowing bulb on/off

var bulb=document.querySelector("#bulb");
var btn=document.querySelector("button");

var flag=0;

btn.addEventListener("click",function(){
    if(flag==0){
        bulb.style.backgroundColor="yellow"
        console.log("clicked")
        flag=1
    }
    else{
        bulb.style.backgroundColor="transparent"
        console.log("again clicked")
        flag=0
    }
});

//2-live character counter

const te=document.querySelector(".te");
const ch=document.querySelector(".ch");

te.addEventListener("input",function(){
    const left=20-te.value.length;
    if(left<0){
        ch.textContent=left;
        ch.style.color="red";
    }
    else{
        ch.textContent=left;
        ch.style.color="white";
    }

});