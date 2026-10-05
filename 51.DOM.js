//THE DOM-
/*The HTML DOM allows JavaScript to access and modify the content of HTML elements. 
JavaScript can change all HTML elements, attributes, CSS styles in the page. 
JavaScript can also add, remove the HTML elements and attributes. */

//1- selection elements-
//getelementbyid-

let abcd=document.getElementById("abcd")
console.dir(abcd);//h1#abcd in console
console.log(abcd)//h1 id="abcd">hyiii</h1> in console

//getelementsbyclassname-

let tir=document.getElementsByClassName("tir")
console.log(tir);/*htmlcollection(3) [h1.tir,h1.tir,h1.tir]
0: h1.tir 1: h1.tir 2: h1.tir length: 3*/

let uio=document.getElementsByClassName("uio");
console.log(uio);//htmlcollection [h1.uio]
console.dir(uio);//HTMLCollection(1)

//document.queryselector- will select only the first and can select any element like class, id,attribute,normal tag's etc
//but u have to add # or .  for id aur class will the name of that ex-
//queryselector("#a") a id is selectedd
//queryselector(.ab) ab class is selected

let h=document.querySelector("h1");
console.log(h)//  <h1 class="tir">hello</h1>
console.dir(h)//will give h1#abcd if it is a id and h1.abcd it is a class

//.queryselectorall-

let h2=document.querySelectorAll("h1");
console.dir(h2)/* nodelist(4)0: h1.tir 1:h1#abcd 2: h1.tir 3: h1.tir  length: 4*/

//2-changing the html text using javascript-

let rhea=document.querySelector("h2");
console.dir(rhea);
rhea.innerText="helooooo hyeaaaa";

let rii=document.querySelector("h3");
rii.innerHTML="<i>hiiii i am<br> tanyaa</i> <h1>hiiii</h1>";// here by using innerHTL we can add tags in the text itself 

//rhea.innerHTML="<i>helloo hiii</i>"; will italic the text
//rhea.textContent="hello tanyaaaa";
//The innerHTML property is a part of the JavaScript HTMLElement object and it 
// allows developers to access and manipulate the HTML content of an element. 
// The innerHTML property returns the content between the opening and closing 
// tags of an element, as a string of HTML.

//The main difference between outerHTML and innerHTML is that outerHTML allows 
// you to change the entire element, including its own tags, whereas innerHTML 
// only allows you to change the content within the element.


//<div id="myDiv">
//    <p>This is my paragraph</p>
//    <p>This is my paragraph</p>
//</div>

//let myDiv = document.getElementById("myDiv");
//myDiv.outerHTML = "<div><p>This is my new text</p></div>";


//3-attribute manipulation-

let a = document.querySelector("a");
console.log(a);
//a.href="https://www.google.com"

a.setAttribute("href","https://www.google.com");// will set to value of href od a as goggle's web

let img=document.querySelector("img")
img.setAttribute("src","https://images.unsplash.com/photo-1761839257961-4dce65b72d99?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
//will set the image in the src place

console.log(a.getAttribute("href"));//will give the current value of a which is here is the goggle's web 

//DYNAMIC DOM MANIPULATION-

//created a element in html console using js
let h3=document.createElement("h3");
h3.textContent="hellooooo jiiii";
console.log(h3);

//now for printing it in html document or web

document.body.append(h3);//append after the script tag in html file

let h4=document.createElement("h4");
h4.textContent="hellooooo huuuuuuu";
console.log(h4);
document.body.prepend(h4);//add before the script tag in html web

//to remove a element using js-
h4.remove();

//CHANGING CSS USING JS-
let h5=document.createElement("h5");
h5.textContent="hellooo hiuuuu";
document.body.prepend(h5);
h5.style.color="red";
h5.style.fontSize="30px";
h5.style.backgroundColor="pink";
console.log(h5);

//to add or remove a class on a particular tag

let div=document.querySelector("div");
div.classList.add("hululu");
console.log(div);
//remove
div.classList.remove("hululu");
console.log(div);
//toggle will add if there is not and will remove if there is-

div.classList.toggle("hululu");