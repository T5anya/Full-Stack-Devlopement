/*synchronous functions-
The Synchronous JavaScript executes the JavaScript code line-by-line. The control flow moves from top to bottom and runs each statement one by one
Each statement must finish before the next statement can begin.

*/
console.log("A");

console.log("B");

console.log("C");

/*
output-
A
B
C

imagine blocking
*/
console.log("Start");

someVerySlowOperation();

console.log("End");

/*
If the operation blocks the main thread, "End" can't run until it finishes.

In a browser, excessive blocking work can make the UI feel frozen.



Asynchronous Functions-

The word async means not at the same time.
Instead of waiting for one task to finish before starting the next, JavaScript can continue running other code while waiting for an operation to complete.
When the operation finishes, JavaScript continues by running code that handles the result.

Some operations take time to complete:

downloading data
reading files
waiting for events
waiting for user input
waiting for a timer
Timers run after a specified number of milliseconds
Events run when triggered by an event
Network requests run when the data arrives
If JavaScript waited for these tasks, the page would freeze.

ex-

*/

console.log("Start");

setTimeout(() => {
    console.log("Timer finished");
}, 2000);

console.log("End");

/*
output-
start
end
timer finished

for ex-
here 
*/

setTimeout(() => {
    console.log("Hello");
}, 0);
/*
0 doesn't mean the code will run immediately 
Schedule this callback after the timer delay, once the runtime can execute it.

callback functions-
The callback function in JavaScript is regularly passed as an argument of another function
Callbacks make functions more flexible.
function func_name(callback) {
   // function body
   callback();
}
func_name(callback); // Function invocation
OR
func_name(() => {
   // Callback function body
})

*/

function greet(name, callback) {
    console.log("Hello " + name);

    callback();
}

greet("Tanya", () => {
    console.log("Welcome!");
});

/*
output-
hello tanya
welcome

in below function
() => {
    console.log("Data loaded");
}
    is a callback

*/
setTimeout(() => {
    console.log("Data loaded");
}, 2000);

function profile(username, cb){
    setTimeout(()=>{
        console.log(`user fetched ${username}`);
    cb();
    },2000);
    
};
profile("harsh",function(){
    console.log("executed");
});
/*
Event handling-

Callbacks are often used in JavaScript, especially in event handling:
User interactions, such as button clicks or key presses, can be handled by providing a callback function to an event listener

ex-
document.getElementById("myButton").addEventListener("click", displayDate);
displayDate is  a callback and will be called when a user clicks the button with id="myButton".

Callback Hell-

Sometimes one callback starts another operation that uses another callback.
This can lead to deeply nested, complex and hard-to-read code.

When callbacks get deep, debugging is difficult. The logic moves from left to right and becomes difficult to follow.

This is often referred to as "callback hell" or the "pyramid of doom".

*/