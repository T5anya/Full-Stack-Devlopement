//overal progress=10sec=10000ms 100%
let count=0;
let completeseconds=10;
let progress=document.querySelector(".progress-bar");
let percent=document.querySelector(".percent");
let h2=document.querySelector("h2");
let intv=setInterval(function(){
    if(count<100){
        count++;
        progress.style.width=count+"%";
        percent.innerHTML=count+"%";
    }
    else{
        h2.innerHTML="Download Complete";
        clearInterval(intv);
    }
},( completeseconds*1000/100));
