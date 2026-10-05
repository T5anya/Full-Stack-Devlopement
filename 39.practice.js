//1-Declare your name and city using const , and your age using let .
const name = "John Doe";
const city = "New York";
let age = 30;
console.log("Name:", name);
console.log("City:", city);
console.log("Age:", age);

//2)-

let x = 5;
let x = 10;// Error: Identifier 'x' has already been declared

//3)-

var y=1;
{
    var y=2;
    console.log(y); //2
}
console.log(y); //2

//4)- observe output

console.log(count);
var count = 42;//output will be undefined due to hoisting

//5)- 