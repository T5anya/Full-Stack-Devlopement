/* There are several ways to perform a common task of scheduling call for
 later in JavaScript. The two most frequently used methods for executing 
 code at specific intervals are:

    setInterval() runs a function repeatedly, starting after an interval of 
        time and repeating continuously at that interval
    setTimeout() runs a function once after an interval of time 
   
    
1)-The setInterval() method on the Window interface, repeatedly calls a function or executes a code snippet, with a fixed time delay between each call. The syntax os as follows:


    setInterval(functionRef, milliseconds, arg1, arg2);
    
    The parameters are:

a callback function containing a block of code
the time interval between the execution of the function (1 second = 1000 milliseconds)
arg1, arg2 are optional arguments for the function


*/


function displayGreeting() {
    console.log("Hello")
}

// display greeting every 3 seconds
const intervalID = setInterval(displayGreeting, 3000); 

/*
2)-clearInterval
We use clearInterval(intervalID) to cancel the interval.
 */
// you can to stop the execution by calling clearInterval()
clearInterval(intervalID)
/* 
3)-The setTimeout() method on the Window interface sets a timer which executes a function or specified piece of code once the timer expires. The syntax is as follows:

    setTimeout(functionRef, milliseconds, arg1, arg2); */


//Pass only the function name to setTimeout().
//Calling setTimeout() does not pause JavaScript.
//JavaScript immediately continues with the next statement.

// Call a Timeout
const timera=setTimeout(myFunction, 3000);

// The callback function
function myFunction() {
  myDisplayer("Hello!");
}

/*4)-clearTimeout()
We use clearTimeout(timeoutID) to cancel the timeout.

*/
clearTimeout(timera);

//1-
const timer = document.getElementsByClassName('timer');
let currentTime = 10;

function countDown() {
    currentTime--
    timer[0].textContent = currentTime;
    console.log(currentTime);
    if (currentTime < 0 ) {
        clearInterval(timerID)
        alert('Game over!')
    }
}

let timerID = setInterval(countDown, 1000)

//2-
myDisplayer("Start");

setTimeout(function() {
  myDisplayer("Timer");
}, 3000);

myDisplayer("End");

// Function to display any text
function myDisplayer(text) {
  let demo = document.getElementById("demo"); 
  demo.innerHTML += text + "<br>";
}
/* 
output-
start 
end 
timer */