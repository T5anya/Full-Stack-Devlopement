//DECLARATION AND INITIALIZATNS

var a; //declare karna
var a=12; //declare karna and initialize karna

let B ; //declare karna
let =15; //declare karna and initialize karna

//VAR ,LET ,CONST

//VAR-
//Old and risky
//Scoped to functions, not blocks
//Can be redeclared and reassigned

var x=10;
var y;
var v,w;

var x=20; //redeclared
//it can be declared by various types


//LET-
//New and safe
//Scoped to blocks

//Cannot be redeclared in the same scope but can be reassigned

let p=30;
p=40; //reassigned
//let p=50; //error redeclaration not allowed

//CONST-
//New and safe
//Scoped to blocks
//Cannot be redeclared or reassigned

const z=100;
//z=200; //error reassignment not allowed
//const z=300; //error redeclaration not allowed

//If const holds an object/array, you can still change its contents:
const arr={name:"John"};
arr.name="Doe"; //allowed
//arr={name:"Smith"}; //error reassignment not allowed


//SCOPE-
/*
Block Scope → Code inside {} like in loops, if , etc.
Function Scope → Code inside a function
let and const follow block scope.
var ignores block scope — which leads to bugs.*/

{
var x = 5;
let y = 10;
const z = 15;
}
console.log(x); // ✅ 5
console.log(y); // ❌ ReferenceError
console.log(z); // ❌ ReferenceError

//TEMPORAL DEAD ZONE(TDZ)-
//The time between entering scope and variable declaration
//Accessing let and const variables before declaration throws ReferenceError
{
// console.log(a); // ❌ ReferenceError
    let a = 10; // Declaration
    console.log(a); // ✅ 10
}
//Variables declared with var are hoisted and initialized with undefined, so they don’t have a TDZ.

console.log(b); // ✅ undefined
var b = 20; // Declaration
console.log(b); // ✅ 20


//HOISTING-

/*
JavaScript prepares memory before running code.
It moves all declarations to the top — this is called hoisting.
But:
var is hoisted and set to undefined
let and const are hoisted but not initialized — so accessing them early gives
ReferenceError
*/
{
var x = 5;
let y = 10;
const z = 15;
}
console.log(x); // ✅ 5
console.log(y); // ❌ ReferenceError
console.log(z); // ❌ ReferenceError

js
console.log(a); // undefined
var a = 10;

js
console.log(b); // ❌ ReferenceError
let b = 20;

console.log(c); // ❌ ReferenceError
const c = 30;
//In the above examples, var a is hoisted and initialized to undefined, so accessing it before declaration returns undefined.
//let b and const c are hoisted but not initialized, leading to ReferenceError when accessed before declaration.
