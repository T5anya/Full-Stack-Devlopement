/* execution context -
The execution context is a term that describes the internal workings of code. The JavaScript Execution 
Context describes the environment in which JavaScript code can be run. The execution context specifies 
which code sections have access to the functions, variables and objects used in the code.
js sabse pehle jaise hi aapka function dekhta hai sabse pehle js banata hai execution 
context ye ek process hai jo ki do different phases mai chalta hai 
memory phase and execution phase 

js-lexical scoping 
closures- functions jo ki kisi parent func ke andar
ho aur andar vala fun return ho rhaa ho that func uses the parent fun 
ka variable


*/

function abcd(){
    let a=12;
    return function(){
        console.log(a);
    }
}

abcd();

/* 
ye sach hai fun ke khatam hone par aapka fun aur uske variables bhi khatam ho jate hai
pr jb bhi closure banta hai toh aapka fun aur uske variables ka ek backlink banaya jaata hai aur uska 
naam hota hai  
JavaScript, the 'this' keyword contains the reference to the object.
When you use the 'this' keyword in the global scope, it represents the global (window) object. You can access the global variables using the 'this' keyword in the global scope. 

When you use the 'this' keyword in the function, it represents the global scope or 'window' object
*/