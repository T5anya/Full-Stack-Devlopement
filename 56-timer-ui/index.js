let seconds=0;
const h3=document.querySelector("h3");
const startBtn=document.getElementById("start");
const pauseBtn=document.getElementById("pause");
const resetBtn=document.getElementById("reset");
let timer;

function updateTime(){
    seconds++;
    let hrs=Math.floor(seconds/3600);
    let mins=Math.floor((seconds%3600)/60);
    let secs=seconds%60;
    let hrw=hrs.toString().padStart(2,"0");//first convert the numbers in string then make the string 2 charcter long if short4er then add o at start
    let minw=mins.toString().padStart(2,"0");
    let secw=secs.toString().padStart(2,"0");
    h3.textContent=`${hrw}:${minw}:${secw}`;
}
startBtn.addEventListener("click",function(){
    timer=setInterval(updateTime, 1000);
});
pauseBtn.addEventListener("click",function(){
    clearInterval(timer);
});
resetBtn.addEventListener("click",function(){
    clearInterval(timer);
    seconds=0;
    h3.textContent="00:00:00";
});