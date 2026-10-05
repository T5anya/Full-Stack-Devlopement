let count=0;
let btn1=document.querySelector(".btn1");
let btn2=document.querySelector(".btn2");
let counter=document.querySelector(".count");
let reset=document.querySelector(".reset");
let save=document.querySelector(".save");
let load=document.querySelector(".load");



btn1.addEventListener("click",function(){
    count++;
    console.log(count);
    counter.innerHTML=count;
});
btn2.addEventListener("click",function(){
    if(count<=0){
        count;
    }
    else{count--;
    console.log(count);
    counter.innerHTML=count;}
});

reset.addEventListener("click",function(){
    count=0;
    console.log(count);
    counter.innerHTML=count;
});

save.addEventListener("click",function(){
    localStorage.setItem("count", count);
});

load.addEventListener("click",function(){
    let saved = localStorage.getItem("count");
  if (saved !== null) {
    count = Number(saved);
  }
  counter.innerHTML=count;

})