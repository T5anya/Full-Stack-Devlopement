//Objects -
// in JavaScript are like real-world records – a collection of key-value pairs.
// They help us store structured data (like a student, a product, or a user profile)

let obj={
    name:"chetan",
    age:20,
    address:"jaipur",
}

//Keys are always strings (even if you write them as numbers or identifiers)
// Values can be anything – string, number, array, object, function, etc.

//Accessing Object Properties
console.log(obj.name); // dot notation
console.log(obj["age"]); // bracket notation
//ex-
let obj2={
    1:"one",
    2:"two",
    name:"chetan",
}
console.log(obj2[1]); // one
console.log(obj2["2"]); // two

// dot vs key notation
//Use dot notation for fixed key names
// Use bracket notation for dynamic or multi-word keys

obj2["full-name"]="chetan kumar"; // bracket notation
obj2.course="JS"; // dot notation

//Nested objects=
//Objects can have nested objects (objects inside objects)

let use = { name: "Amit",
address: {
city: "Delhi",
pincode: 110001,
location:{
    lat:28.7041,
    long:77.1025
},}
};
console.log(use.address.location.lat); // 28.7041

//Destructuring objects=
// We can extract properties from an object into variables using destructuring

let {x,y}=use.address.location;
console.log(x); // 28.7041
console.log(y); // 77.1025

//Looping through objects=
// We can loop through an object's properties using for...in loop

let obj3={
    name:"chetan",
    age:20,
    city:"jaipur",
}
for(let key in obj3){
    console.log(`${key} : ${obj3[key]}`);
}
// name : chetan
// age : 20
// city : jaipur

// object.keys(),object.values(),object.entries()
// These methods help us get arrays of keys, values, or key-value pairs from an object

console.log(Object.keys(obj3)); // [ 'name', 'age', 'city' ]
console.log(Object.values(obj3)); // [ 'chetan', 20, 'jaipur' ]
console.log(Object.entries(obj3)); // [ [ 'name', 'chetan' ], [ 'age', 20 ], [ 'city', 'jaipur' ] ]

//Copying objects=
// We can create a shallow copy of an object using Object.assign() or spread operator (...)

//Shallow copy
let original={a:1,b:2};
let copy1={...original};
console.log(copy1); // { a: 1, b: 2 }

//spread operator
let copy2=Object.assign({},original);
console.log(copy2); // { a: 1, b: 2 }

// if the object has nested objects, shallow copy methods will not create copies of nested objects.

//For deep copy, we can use JSON methods or libraries like Lodash
let nestedOriginal={
  name:"chetan",
  address:{
    city:"jaipur",
    pincode:302019,
  }
};
let deepCopy=JSON.parse(JSON.stringify(nestedOriginal));
console.log(deepCopy);
// { name: 'chetan', address: { city: 'jaipur', pincode: 302019 } }

//optional chaining=
// It allows safe access to nested object properties without errors if a property is undefined

let use2 = { name: "Amit",
address: {
city: "Delhi",
pincode: 110001,
location:{
    lat:28.7041,
    long:77.1025
},}
};
console.log(use2.address?.location?.lat); // 28.7041
console.log(use2.contact?.phone); // undefined

//Computed Property Names=
// We can use expressions to define object property names dynamically

let key = "marks";
let report = {
[key]: 89
};

//delete obj.key removes the property
//Spread ≠ deep copy

//freeze
var ob={
    name:"tanya",
    age:28
}
Object.freeze(ob);//will freeze the object and prevents it from changing
console.log(ob);//{name:"tanya",age:28}
ob["age"]=18;
console.log(ob);//{name:"tanya",age:28}
//EXERCISES-

// 1.Create an object person with keys name, age and city and print each key's value.

let person = {
     name: "chetan",
     age: 20,
     city:"jaipur",
}

for(let key in person){
     console.log(`${key} : ${person[key]}`);
}
// 2. Given the object below, perform the following tasks:
let student = { name: "Aman", marks: 85 };

//a-How do you print marks?
console.log(student.marks);

//b-How do you update marks to 90?
student.marks=90;

//c-Add a new property grade to the student object.
student.grade="A";

//d-What happens if you access a property that does not exist?
console.log(student.section); // undefined

//e-Delete the marks property from the object.
delete student.marks;


//3-Create an object calculator with methods add, subtract, multiply, and divide that take two numbers as arguments and return the result.

let calculator = {
    add: function(a,b){
        return a+b;
    },
    subtract: function(a,b){
        return a-b;
    },
    multiply: function(a,b){
        return a*b;
    },
    divide: function(a,b){
        return a/b;
    },
}
console.log(calculator.add(5,3)); // 8
console.log(calculator.subtract(5,3)); // 2
console.log(calculator.multiply(5,3)); // 15  
console.log(calculator.divide(6,3)); // 2

//4-What will be the output?
let user1 = {name: "Riya",
  greet: function() {
    return "Hello " + this.name;}
};
console.log(user1.greet());

// Output: Hello Riya

//5.Given:
let employee = {
  name: "Rahul",
  address: {
    city: "Delhi",
    pincode: 110001
  }
};

//a-How do you access city?
console.log(employee.address.city);

//b-How do you update pincode?
employee.address.pincode=110002;


//6-Create an object classroom with property students as an array.
let classroom = {
    firststudent:{
    fullname:"Amit",
    age:20,
    },
    secondstudent:{
    fullname:"Sonia",
    age:19,
    },
};

//a-Access the first student name from the object.
console.log(classroom.firststudent["fullname"]);
// Output: Amit

//b-Add a new student to the array inside the object.
classroom.thirdstudent={
    fullname:"Rohan",
    age:21,
};
// Output: { fullname: 'Rohan', age: 21 }


//7-What will this output?
let obj1 = {};
obj1.name = "JS";
obj1["level"] = "Basic";
console.log(obj1);
// Output: { name: 'JS', level: 'Basic' }


//8-Write a function that takes an object and prints all its keys.
function printKeys(obj){
    for(let key in obj){
        console.log(key);
    }
}
printKeys({a:1,b:2,c:3});
// a
// b
// c


// 9-Predict the output:
let user = { name: "Amit", age: 25 };
let { name, age = 30 } = user;
console.log(age);
//25 beacuse age exists in user object and default value is not assigned


//10-Extract nested properties using destructuring.

let users={
    name:"Ravi",
    address:{
        city:"Mumbai",
        pincode:400001,
    },
    location:{
        lat:19.0760,
        long:72.8777,
    }
};

let {city}=users.address;
let {lat,long}=users.location;
console.log(city); // Mumbai
console.log(lat); // 19.076 
console.log(long); // 72.8777


//11-given a dynamic key let key = "marks"; create an object student with that key and 
//assign it a value of 95.

let key2="marks";
let student2={
    name:"Rahul",
    [key2]:95,
};
console.log(student2); // { name: 'Rahul', marks: 95 }