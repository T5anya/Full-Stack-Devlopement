//EVENTS AND EVENT HANDLING-

//When the page loads, it is called an event. When the user clicks a button, that click 
// too is an event. Other examples include events like pressing any key, closing a 
// window, resizing a window, etc.

//browser pe kuch bhi karo vo event hoga;


//onclick
let butt=document.querySelector(".butt");
function sayHello() {
		 alert("Hello World");
         butt.style.backgroundColor="yellow";
         butt.style.padding="20px 20px";
	  }
//butt.addEventListener("click",clicked);


//doubleclick; continues double click
let hi=document.querySelector(".hi");
function dblclick(){
    hi.style.color="red";
    hi.style.fontSize="40px";
}
//hi.addEventListener("dblclick",dblclick)

//we can remove the event also with 
// elementname.removeEventListener("dbclick",dblclick);


//addeventlistner-
//event listener ka matlab aapne koi action  ka reaction diya hai.
// This allows you to specify a function that will be executed when a particular event 
// occurs on the specified element.
//element.addEventListener(event, function, options(optional));
//You can add many event handlers to one element.
//You can add many event handlers of the same type to one element, i.e two "click" events.

//ex-

let h1=document.querySelector("h1");
h1.addEventListener("click",function(){
    h1.style.color="Red";
});


//difference bw mousedown and click;
//The mousedown event is triggered when a mouse button is pressed down over an element. 
// the click event handles the button press as well as the button release while 
// mousedown only handles the button click.

//mouse events-
//1-click-explained

//2-dblclick-explained

//3-mousedown / mouseup
//These events fire when a mouse button is pressed down (mousedown) or released (mouseup) over an element, respectively.

let apple=document.querySelector(".apple");
apple.addEventListener("mousedown",function(){
    apple.style.fontSize="40px";
});

let banana=document.querySelector(".banana");
banana.addEventListener("mouseup",function(){
   banana.style.fontSize="40px";
});


//4-mousemove
//Fires the mousemove event to monitor the mouse pointer's movement over a specific <div> element every time the mouse moves

let orange=document.querySelector(".orange");
let out=document.querySelector("out");
window.addEventListener("mousemove",function(event){
    orange.style.top=event.clientY+"px";
    orange.style.left=event.clientX+"px";
   console.log(event.clientX,event.clientY);
});
//continuously as the mouse pointer moves over an element, providing positional information (coordinates) about the cursor.


//5-mouseover
//Fires when the pointer moves over an element (or one of its children).

//6-mouseout
//Fires when the pointer leaves an element.

let grapes=document.querySelector(".grapes");

// Let box listen for mouseover

grapes.addEventListener("mouseover",function(){
     grapes.style.backgroundColor = "red";
    grapes.innerText = "Mouse Over!";
} ); 


// Let box listen for mouseout
grapes.addEventListener("mouseout", function () {
  grapes.style.backgroundColor = "lightblue";
    grapes.innerText = "Hover me";
});


//7-mouseenter-

let mouse=document.querySelector("#rhea");
mouse.addEventListener("mouseenter", () => {
mouse.style.border = "5px dotted green";});

//8-mouseleave-

mouse.addEventListener("mouseleave", () => {
mouse.style.border = "5px dotted orange";});

//keyboard events-
//keydown-(key is pressed down)

let k=document.querySelector("#k");
k.addEventListener("keydown",function(event){
    console.log(event.key);
    document.querySelector("#demo").innerText=event.key + " is pressed";
});

//keyup (key is released)-

let ke=document.querySelector("#ke");
ke.addEventListener("keydown",function(event){
    console.log(event.key);
    document.querySelector("#demo1").innerText=event.key + " is pressed";
})

//keydown is triggered when any key is pressed down, providing information about the 
// pressed key, including modifiers. keypress is triggered specifically when a character
//  key is pressed, providing information about the typed character without details on
//  modifiers.

//form events-
//input -

let input=document.querySelector("#key");
input.addEventListener("input",function(e){
    console.log(e.data);
})


//change- ye jab chalta jab aapke form  ke select mai kuch change hota hai

let sel=document.querySelector("select");
sel.addEventListener("change",function(e){
    console.log(e.target.value);
    document.querySelector("#select").innerText=e.target.value+" is selected";
})


//submit-

let form=document.querySelector("#form");
form.addEventListener("submit",function(){
    var username = document.getElementById('name').value;
         var password = document.getElementById('pass').value;
         // Perform validation
         if (username === "" || password === "") {
            alert("Please fill in all fields");
            return false; // Prevent form submission
         }
         alert("Form submitted! Username is:"+username+",Password is:"+password);      
         return true; // Allow form submission
})


//window events- window events are actions that occur when the user does something 
//affecting the entire browser window, like loading, resizing, closing, or moving the 
//window. The most common window event is simply loading the window by opening a 
//particular web page.

//approach-

let win=document.querySelector("#window");
window.addEventListener("keydown",function(e){
    if(e.key===" "){
        win.textContent="SPC";
    }
    else{
        win.textContent=e.key;
    }
});

//
let fi=document.querySelector(".file");
let bt1=document.querySelector("#file");
fi.addEventListener("click",function(){
    bt1.click();
});
bt1.addEventListener("change",function(et){
    //console.log(e.target.files[0].name);
    
    const file=et.target.files[0];
    if(file){
        fi.textContent=file.name;
    }

})


//load-
// load event fires when the entire page has fully loaded, including all 
// dependent resources such as images, stylesheets, and sub-frames.

window.addEventListener("load", function () {
  document.getElementById("dem").innerHTML = "Page is fully loaded!";
});


const form1=document.querySelector(".for1");
const inputs=document.querySelectorAll("#name")
form1.addEventListener("submit",function(dets){
    dets.preventDefault();
    console.log(inputs[0].value,
        inputs[1].value,
        inputs[2].value,
        inputs[3].value,
        inputs[4].value
    );
})


//In JavaScript, when an event occurs on an element inside nested elements, 
// it doesn’t just trigger on that element — it propagates through the DOM 
// in a defined order. This process is called event propagation and it has 
// three phases: capturing, target, and bubbling.

//Event Capturing (Trickling Phase) In capturing, the event starts from the 
// top of the DOM (document → html → body → ...) and travels downward to the
//  target element. You can listen in this phase by passing { capture: true } 
// (or true) as the third argument in addEventListener.

//Event Bubbling In bubbling, the event starts from the target element and 
// travels upward through its ancestors until it reaches the document. By 
// default, addEventListener listens in the bubbling phase unless { capture: 
// true } is specified.
 //pehle capture phase chalta hai phir bubbling phase
//event bubbling-
//jispe event aayega agar uspar listener nahi hua to huamra event uske parent par 
// listener dhundega aur aisa karte karte upar ki taraf ove karega

let follow=document.querySelector(".follow");
follow.addEventListener("click",function(){
    alert("clicked");
});

//event capturing-


const a =document.querySelector(".a");
const b=document.querySelector(".b");
const c=document.querySelector(".c");
const bt=document.querySelector(".cli");

//event delegation-
//
