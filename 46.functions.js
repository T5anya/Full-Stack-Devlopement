function dance(){
    console.log("Dance!");
    let headingelement=document.getElementById("out");
    headingelement.innerHTML = "Dancing!\n";
    console.log(headingelement);
}
dance();

// Ye function humne is file me banaya hai aur isko humne HTML file me call kiya hai.

//Function declaration-You define it once, then call it whenever needed.
 function get(name){// name is parameter
    console.log("Hello from get function"+ name);
 }
    get("Sheryians");//sheryians here is argument

function sum(a, b) {
return a + b;
}
let total = sum(5, 10); // total is 15
//return sends back a result to wherever the function was called
//After return , function exits


//Function expression- You create a variable and assign a function to it.
let multiply = function(x, y) {
      return x * y;
};
let result = multiply(4, 5); // result is 20
//Functions stored in variables
//Cannot be hoisted (you can’t call them before they’re defined)

//Arrow function- A shorter syntax for writing functions.

const greet = () => {
console.log("Hi!");
};
greet(); // Outputs: Hi!
//No parameters, no return value

const square = n => n * n;
let squaredValue = square(6); // squaredValue is 36
//Single parameter, single expression (implicit return)

//default parameters
function greetUser(name = "Guest") {
      console.log("Hello, " + name + "!");
}
greetUser(); // Outputs: Hello, Guest
greetUser("Alice"); // Outputs: Hello, Alice!

//rest parameters
function sumAll(...numbers) {
      return numbers.reduce((total, num) => total + num, 0);
}
let totalSum = sumAll(1, 2, 3, 4); // totalSum is 10
//Can take any number of arguments as an array

//spread parameters
function displayColors(color1, color2, color3) {
      console.log("Colors: " + color1 + ", " + color2 + ", " + color3);
}
let colors = ["Red", "Green", "Blue"];
displayColors(...colors); // Outputs: Colors: Red, Green, Blue
//Expands an array into individual arguments


//first-class functions
//JavaScript treats functions as values:
//Assign to variables
//Pass as arguments
//Return from other functions
//Functions can be passed as arguments to other functions.
let add = function(a, b) { return a + b; }



function operateOnNumbers(a, b, operation) {
      return operation(a, b);
}
let sumResult = operateOnNumbers(5, 10, function(x, y) {
      return x + y;
});
let productResult = operateOnNumbers(5, 10, (x, y) => x * y);
//sumResult is 15, productResult is 50
console.log("Sum: " + sumResult);
console.log("Product: " + productResult);

//Higher-order functions
//Functions that take other functions as arguments or return functions
//A higher-order function specifically requires functions as arguments.
//Higher-order functions must return another function.
function applyFunction(fn, a, b) { return fn(a, b); }



function abcd(){
      return function() {
            console.log("Hello from the returned function!");
      }; 
}
abcd(); // Outputs: Hello from the returned function! here abcd is a hof 

//can be written as also
function abcd(val){
}
abcd(function() {}
); // passing function as argument

//pure vs impure functions

//Pure functions
//Given the same input, always return the same output
//No side effects (don’t modify external state)
//aisa functon jo bahar ki value ko na badle

function pureAdd(a, b) {
      return a + b;
}
let pureResult1 = pureAdd(2, 3); // pureResult1 is 5
let pureResult2 = pureAdd(2, 3); // pureResult2 is also 5
//pureAdd is a pure function

//Impure functions
//May return different outputs for the same input
//May have side effects (modify external state)
//aisa function jo bahar ki value ko badal de

let counter = 0;
function impureIncrement() {
      counter++;
      return counter;
}
let impureResult1 = impureIncrement(); // impureResult1 is 1
let impureResult2 = impureIncrement(); // impureResult2 is 2
//impureIncrement is an impure function
console.log("Counter after impure function calls: " + counter);
//counter value changed due to impure function

//Closures and Lexical Scoping
//A closure is a function that "remembers" its outer variables even when the 
//function is executed outside their scope.
// aisa function jo return kare ek aur function aur return hone vala function
// humesa apne parent function ki variables ko use kare

function abcd(){
   let a=12;
   return function(){
      console.log(a);
   }
}
abcd()(); // Outputs: 12


function outerFunction(outerVariable) {
      return function innerFunction(innerVariable) {
            console.log("Outer Variable: " + outerVariable);
            console.log("Inner Variable: " + innerVariable);
      }
}
const newFunction = outerFunction("outside");
newFunction("inside");
// Outputs:
// Outer Variable: outside
// Inner Variable: inside
//innerFunction ne apne parent function ki variable outerVariable ko access kiya

//Lexical scoping means that functions are executed using the variable scope
//that was in effect when they were defined, not the scope in effect when they are invoked.
function lexicalExample() {
      let x = 10;
      function inner() {
            console.log(x);
      }     
      return inner;
}
const lexicalFunc = lexicalExample();
lexicalFunc(); // Outputs: 10
//inner function accesses x from its lexical scope

//IIFE (Immediately Invoked Function Expression)
//A function that runs as soon as it is defined
(function() {
      console.log("This function runs immediately upon definition!");
})(); // Outputs: This function runs immediately upon definition!

//Hoisting
hello(); // works
function hello() {
console.log("Hi");
}  
//Function declarations are hoisted
//Function expressions and arrow functions are not hoisted
geet(); // error
const geet = function () {
console.log("Hi");
};

