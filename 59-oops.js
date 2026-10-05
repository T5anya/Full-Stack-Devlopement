//to create a new instance of object we use new keyword
var book = new Object();   // Create the object
      book.subject = "Perl";     // Assign properties to the object
      book.author  = "Mohtashim";
      document.getElementById("output").innerHTML = 
      "Book name is : " + book.subject + "<br>" + 
      "Book author is : " + book.author;

function createPencil(name,price,color,company){
    this.name=name;
    this.price=price;
    this.color=color;
    this.company=company;
    this.write=function (text){
        h1=document.createElement("h1");
        h1.textContent=text;
        h1.style.color=this.color;
        document.body.append(h1);
        }
    }

let pencil1=new createPencil("nataraj",10,"black","nataraj");
let pencil2=new createPencil("doms",10,"red","doms");

//write will work only when writeen pencil1/pencil2.write("hello")
/*
The JavaScript classes are a blueprint or template for object creation. They encapsulate the data and functions to manipulate that data. We can create the object using classes. 

*/
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}
let person1 = new Person("John", 30);
let person2 = new Person("Jane", 25);


class Car {
			constructor(brand, model, price, year) {
				this.brand = brand;
				this.model = model;
				this.price = price;
				this.year = year;
			}
		}
const carObj = new Car("BMW", "X5", 9800000, 2019);
document.getElementById("out").innerHTML += 
		"Car brand : " + carObj.brand + "<br>"
		+ "Car model : " + carObj.model + "<br>"
		+ "Car price : " + carObj.price + "<br>"
		+ "Car year : " + carObj.year + "<br>"

/*
a static method is a method that is associated with a class, rather 
than an instance of the class. In JavaScript, static methods are defined 
using the static keyword and they can be accessed without creating an instance of the class.
*/
class MathHelper {
    static add(a, b) {
        return a + b;
    }
}
//You can access the static method directly from the class, without creating an instance of the class.

console.log(MathHelper.add(1, 2)); // 3

//PROTOTYPES-
/* The native prototypes in JavaScript are property of Object.prototype object
In JavaScript, each object contains the prototype property. The prototype of each 
object contains the methods and properties related to the object. So, it is also called 
the native prototype.

However, you can update or add new methods and properties to the native prototype object, 
but you can't delete any already existing. */

class user{
    constructor(name,address,username,email){
    this.name=name;        
    this.address=address;
    this.username=username;
    this.email=email;
    this.role="user";
    }
    write(text){
        let h2=document.createElement("h2");
        h2.textContent=`${this.name}:${text}`
        document.body.append(h2);
    }
    checkRole(){
        return `you are a${role}`;
    }
}

class Admin extends user{
    constructor(name,address,username,email){
        super(name,address,username,email);
        this.role="Admin";
    }
    remove(){
        document.querySelectorAll("h2").forEach(element => {
            element.remove();
            
        });
    }
}

let u1=new user("tanya","bhopal","asysnc23","hgavsxhux@.com.in");
let u2=new user("tany","mumbai","asys3","vxcxcrfsz@.com.in");
let ai=new Admin("admin","america","admin12","admin@.com.in");

//encapsulation-
/* 
Encapsulation is a fundamental concept in object-oriented programming 
(OOP) that refers to the practice of hiding the internal details of an 
object from other objects and code. In JavaScript, encapsulation is achieved 
by using closures and access modifiers, such as the private and public keywords.

JavaScript uses closures to implement encapsulation, which allows developers to 
create private variables and methods that cannot be accessed from outside the 
object. */

function Person1(name, age) {
    let privateAge = age;
    this.name = name;

    this.getAge = function() {
        return privateAge;
    }
}

let person = new Person1("John", 30);
console.log(person.name); // "John"
console.log(person.privateAge); // undefined
console.log(person.getAge()); // 30

/*
Inheritance-
Inheritance is a fundamental concept in object-oriented 
programming (OOP) that allows developers to create a new 
class that inherits properties and methods from an existing 
class. 
In JavaScript, inheritance is achieved by using the prototype 
property and the Object.create() method.

single-level inheritance
class childClass extends parentClass {
    // Child class body
}
multi-level inheritance
class A {
}
class B extends A {
}
class C extends B {
}
*/
// Parent class
    class Bike {
        constructor(gears) {
            this.gears = gears;
         }
      }
// Child class
    class Honda extends Bike {
        constructor(brand, gears) {
            super(gears);
            this.brand = brand;
        }
    }
    class Shine extends Honda {
        constructor(model, brand, gears) {
            super(brand, gears);
            this.model = model;
        }
    }
    const newBike = new Shine("Shine", "Honda", 5);

/*
the abstraction concept allows you to hide the implementation 
details and expose features only to the users.raction-

    */

function Shape() {
    if (this.constructor === Shape) {
       // throw new Error("Cannot instantiate abstract class Shape");
    }
    this.draw = function() {
       // throw new Error("Cannot call abstract method draw from Shape");
    }
}

function Circle() {
    Shape.call(this);
    this.draw = function() {
        console.log("Drawing a Circle");
    }
}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

let circle = new Circle();
circle.draw(); // "Drawing a Circle"
let shape = new Shape(); // Error: Cannot instantiate abstract class Shape

/*
In this example, the Shape class is an abstract class that cannot be 
instantiated and contains an abstract method draw() which throws an
 error when called. The Circle class inherits from the Shape class and 
 implements the draw() method providing a specific implementation.

Polymorphism-

Polymorphism is a fundamental concept in object-oriented programming 
(OOP) that refers to the ability of different objects to respond to 
the same method call in different ways.
In JavaScript, polymorphism is achieved by using function overloading 
and function overriding.

Function overloading refers to the ability of a function to have multiple 
implementations based on the number and/or types of arguments passed to it.

JavaScript does not support function overloading natively, however, you can 
achieve similar functionality by using the arguments object and checking the
 number and/or types of arguments passed to the function.
*/
class Shap {
    constructor(name) {
        this.name = name;
    }
    draw() {
        console.log(`Drawing a ${this.name}`);
    }
}

class Circl extends Shap {
    draw() {
        console.log(`Drawing a Circle`);
    }
}

class Squar extends Shap {
    draw() {
        console.log(`Drawing a Square`);
    }
}

let shap = new Shap("Shape");
let circl = new Circl();
let squar = new Squar();

shape.draw(); // Drawing a Shape
circle.draw(); // Drawing a Circle
squar.draw(); // Drawing a Square