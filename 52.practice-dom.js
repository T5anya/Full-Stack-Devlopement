//1-select all li elements and print their text using a loop.
let lis=document.querySelectorAll("li");
for(let i=0;i<lis.length;i++){
    console.dir(lis[i].textContent);
}

lis.forEach(function(val){
    console.log(val.textContent);
});

//2-select a paragraph and replace its content with
// <b>updated by</b>javascript

let p=document.querySelector(".abcd");
p.innerHTML="<b>updated by</b>javascript";
console.log(p);

//3- create a new list <li>new task</li> and add it to end of <ul>

let ul=document.querySelector("ul");
let li=document.createElement("li");
li.textContent="new Task";
ul.appendChild(li);

//3-create a new image element with placeholder source and add it to top of a div.

let img=document.createElement("img");
img.setAttribute("src","https://images.unsplash.com/photo-1761839257961-4dce65b72d99?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
document.querySelector("div").prepend(img);

//4-select the first item in list from ul and remove it from dom
let it=document.querySelector("li");
it.remove();

//5- add highlight class to every even item of the list.

let ite=document.querySelectorAll("ul li:nth-child(2n)");
let ui=document.querySelector("ul");
ite.forEach(function(ele){
    ele.classList.add("high");
});

//6-set size of p class=hf to 30px using style in js.

let hf=document.querySelectorAll(".hf");
hf.forEach(function(el){
    el.style.fontSize="30px";
})


//7)-how to get src of an image
let i=document.querySelector(".i")
console.log(i.getAttribute("src"));
 

//8)-select a link and update its href to https://sheryians.com 
let ai=document.querySelector(".ai");
console.log(ai.setAttribute("href","https://sheryians.com "));
//ai.setAttribute("target","_blank");
ai.target="_blank"; //both will work


//9-remove disabled attribute from a button
let but=document.querySelector(".but");
but.removeAttribute("disabled");


/*
COMMON CONFUSIONS-
innerHTML- will add the tags in the text
ex- div.innerHTML="i <i> am tanya</i>";
will italic the text am tanya

innertext-will not convert the tags in html will just display the tags as text
slower than textcontent

textcontent- will not convert the tags in html will just display the tags as text
*/


