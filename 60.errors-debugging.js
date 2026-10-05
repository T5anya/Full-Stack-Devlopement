/*
Errors-
An error is an event that occurs during the execution of a 
program that prevents it from continuing normally. Errors 
can be caused by a variety of factors, such as syntax errors,
 runtime errors, and logical errors.

Syntax errors, also called parsing errors, occur at compile time in traditional programming languages and at interpret time in JavaScript.

Logic errors can be the most difficult type of errors to track down. These errors are not the result of a syntax or runtime error. Instead, they occur when you make a mistake in the logic that drives your script and do not get the expected result.

Error Handling-
Whenever any error occurs in the JavaScript code, the JavaScript engine stops the execution of the whole code

try....catch..finally
try {
      // Code to run
      [break;]
   } 
   catch ( e ) {
      // Code to run if an exception occurs
      [break;]
   }
   [ finally {
      // Code that is always executed regardless of 
      // an exception occurring
   }]
*/
try {
      var a = 100;
      alert(myFunc(a));                  
   }
   catch (e) {
      alert(e);
   }
   finally {
      alert("Finally block will always execute!" );
   }

/*throw statement
You can use throw statement to raise your built-in exceptions or your customized exceptions.
*/

function myFunc() {
      var a = 100;
      var b = 0;

      try {
         if ( b == 0 ) {
            throw( "Divide by zero error." ); 
         } else {
            var c = a / b;
         }
      }
      catch ( e ) {
         alert("Error: " + e );
      }
   }
/*
html code-
<form>
      <input type = "button" value = "Click Me" onclick = "myFunc();" />
   </form>

*/

/*
Debugging-
Debugging means finding and fixing mistakes (bugs) in your code.

Bugs are normal. The skill is learning how to locate them quickly.


A good debugging habit is: Read → Reproduce → Reduce → Fix

Read the error
Reproduce the problem
Reduce to a small example
Then fix it.

*/