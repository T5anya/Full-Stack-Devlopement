/*In JavaScript, every value has a type.
These types define what kind of data is being stored — a number, text, boolean, object, etc.
There are two categories:
Primitive types – stored directly.
Reference types – stored as memory references.


primitives-
aisi saari values jinko copy karne pe tumhe ek real copy milti hai na ki uska reference.
jaise ki string, number, boolean, undefined, null, symbol, bigint.

references-
aisi values jinko copy karne pe tumhe uska reference milta hai na ki real copy.
jaise ki object, array, function.


🔹 Primitive Data Types
. String → Text
"hello" , 'Sheryians'
. Number → Any numeric value
3 , -99 , 3.14
. Boolean → True or false
true , false
. Undefined → Variable declared but not assigned
let x; → x is undefined
. Null → Intentional empty value
let x = null;
. Symbol → Unique identifier (rarely used)
. BigInt → Very large integers
123456789012345678901234567890n

🔹 Reference Data Types
Object → { name: "Harsh", age: 26 }
28/06/2025, 15:10 Complete JS Course Syllabus

6/36

Array → [10, 20, 30]
Function → function greet() {}
These are not copied directly, but by reference.

🔍 typeof Operator
Used to check the data type of a value:

Note: typeof null === "object" is a bug, but has existed since the early days of JS.

typeof "Sheryians" // "string"
typeof 99 // "number"
typeof true // "boolean"
typeof undefined // "undefined"
typeof null // "object" ← known bug
typeof [] // "object"
typeof {} // "object"
typeof function(){} // "function"

🔁 Type Coercion (Auto-Conversion)
JavaScript auto-converts types in some operations:

"5" + 1 // "51" → number converted to string
"5" - 1 // 4 → string converted to number
true + 1 // 2
null + 1 // 1
undefined + 1 // NaN

== compares value with type conversion
=== compares value + type (no conversion)

5 == "5" // true
5 === "5" // false

null ka matlab hota hai apne ne koi value nahi di hai jaan bujhkar
undefined ka matlab hota hai variable declare to kar diya but aapne usme koi value assign nahi ki hai aur by defaukt it will give undefined
*/