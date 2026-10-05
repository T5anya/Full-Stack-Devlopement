//1- number of parameters and arguments here also what is the vaue of each parameter
function demo(a, b, c) {}
demo(1, 2); // a=1, b=2, c=undefined number of parametr =3 number of argument=2
demo(1, 2, 3, 4); // a=1, b=2, c=3 (4 is ignored)

//2- what does ... operator means in function parameters and in function call
//rest parameters
function collectArgs(...args) {
      return args;
}
let collected = collectArgs(1, 2, 3, 4); // collected is [1, 2, 3, 4]

//3-  use rest parameter to accept any number of scores and cluclate their total

function totalScores(...scores) {
        scores.forEach(function(val){
            total += val;
        });
        return total;
}
console.log(totalScores(10, 20, 30)); // total is 60

//4- fix this code using early return
function checkAge(age) {
        if (age >= 18) {
            console.log("Access granted");
        }
        else{
        console.log( "Access denied");
        }
}

function checkAgeFixed(age) {
    if(age>=18)return "Access granted";
    else return "Access denied";
}
console.log(checkAgeFixed(20)); // Outputs: Access granted
console.log(checkAgeFixed(16)); // Outputs: Access denied

//5-can u assign a function to a variable and call it show how
let sayHello = function() {
    
};
sayHello();

//6- pass a function inside another function and execute it
function executeFunction(fn) {
    fn();
}
executeFunction(function() {
    console.log("Function executed!");
}
);;

//7-.Make a nested function where the inner one prints a variable from the outer one.

function outerFunction() {
    let outerVar = "I'm from the outer function!";
    function innerFunction() {
        let innerVar = "I'm from the inner function!";
        console.log(outerVar, innerVar);
    }
    innerFunction();
}
outerFunction(); // Outputs: I'm from the outer function!, I'm from the inner function!

//8-what will be the output of given two progrrams-
//Program 1
geet();
let geet=function() {
    console.log("Hello!");
};//ERROR BECAUSE FUNCTION EXPRESSION CANNOT BE HOISTED

//Program 2
greet();
function greet() {
    console.log("Hi!");
}//OUTPUT WILL BE Hi! BECAUSE FUNCTION DECLARATION CAN BE HOISTED



//9. Write a BMI calculator function

function bmi(weight, height) {
    return weight / (height * height);
}
console.log(bmi(70, 1.75).toFixed(3)); // Outputs: 22.857142857142858 toFixed(3) will give 22.857

//10. Create a greet function with default name

function greet(name = "Guest") {
    return `Hello, ${name}!`;
}
console.log(greet()); // Outputs: Hello, Guest!

//11. Sum all numbers using rest parameter

function sum(...numbers){
    numbers.forEach(function(val){
        total += val;
    });
    return total;
}
console.log(sum(1,2,3,4,5)); // Outputs: 15

//12. Create a closure counter function

function closure(){
    let count="high";
    return function(){
        console.log(count);
    };
}
closure();

//13. Write a function that returns another function

function counter(){
    return function(){
        
    };
}

//14. Use a function to log even numbers in array



//15. Create a pure function to add tax

function addTax(amount, taxRate) {
    return amount + (amount * taxRate);
}
console.log(addTax(100, 0.15)); // Outputs: 115

//16.Use IIFE to show welcome message

(function(){
    console.log("Welcome to the site!");
})();

//17. Write a discount calculator (HOF style)

function discountCalculator(discount) {
    return function(amount) {
        return amount - (amount * discount / 100);
    }
}

let ten =discountCalculator(10);
let twenty =discountCalculator(20);
console.log(ten(1200)); // Outputs: 1080
console.log(twenty(1200)); // Outputs: 960

//18. Make a toUpperCase transformer using HOF

function Transformer(str,fn) {
    return fn(str);

}

function toUpperCase(st){
    return st.toUpperCase();
}
console.log(Transformer("hello", toUpperCase)); // Outputs: HELLO

//19.write a hof function runtwice(fn) that takes another function and will run a function twice

function runTwice(fn){
    fn();
    fn();
}
runTwice(function(){
    console.log("This function runs twice!");
    console.log("This function runs twice!");
});

//20. create one pure function that always returns same output for given input
//and one impure function using a global variable

function pure(a,b){
    console.log( a+b);
}

let val=10;
function impure(a){
    val++;
    console.log(a+val);
}
pure(1,2); // always 3
impure(5); // output will change based on global variable val


//21.Write a function secretNumber() that: Has a private variable num = 7 ,
// Returns a function ,That function returns num, num should NOT be accessible directly

function secretnumber(){
    let num=7;
    return function(){
        return num;
    }
}

//22.Create a function makeCounter() such that:Two counters created from it work 
// independently Example behavior:c1() → 1,c1() → 2,c2() → 1

function makecounter(){
    let count=0;
    return function(){
        count++;
        return count;
    }
}

let c1=makecounter();
let c2=makecounter();
console.log(c1()); // Outputs: 1
console.log(c1()); // Outputs: 2
console.log(c2()); // Outputs: 1
console.log(c2()); // Outputs: 2

//23.Create a function user() that:Has private variables username and password,
// Returns functions to:Get username,Change password,Direct access must not be possible

function user(){
    let username="tanya";
    let password="12345";

    return {
        getUsername: function(){
            return username;
        },
        changePassword: function(newPassword){
            password=newPassword;
            console.log("password changed to " + newPassword);
        }
    };
}
let u=user();
console.log(u.getUsername()); // Outputs: tanya
u.changePassword("67890");  
// password changed to 67890

