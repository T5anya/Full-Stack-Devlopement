//ARRAYS
//An array is like a row of boxes, where each box holds a value and has an index (0, 1, 2...).
//Arrays help you store multiple values in a single variable — numbers, strings, or even
//objects/functions.

let arr=["apple", "banana", "orange",'papaya', 'berry'];
let arra=[1,2,3,4,5,6,7,8,9];
console.log(arr[0]);//apple
console.log(arra[3]);//4

//Creating and accessing arrays

let marks = [90, 85, 78];
console.log(marks[1]); // 85
marks[2] = 80;
console.log(marks); // [90, 85, 80]

//Array Methods

let arr1 = [1, 2, 3, 4];

arr1.push(5); // Add to end
console.log(arr1); // [1, 2, 3, 4, 5]

arr1.pop(); // Remove last
console.log(arr1); // [1, 2, 3, 4]

arr1.shift(); // Remove first
console.log(arr1); // [2, 3, 4]

arr1.unshift(0); // Add to start
console.log(arr1); // [0, 2, 3, 4]

arr1.splice(1, 2); // Remove 2 items starting at index 1
console.log(arr1); // [0, 4]

//splice(starting-index,Count,numbers u want to add) can be used to add remove replace etc
arr1.splice(1,2,99,77);
console.log(arr1); //[0,99,77,4]

arr1.splice(0,3,88);
console.log(arr1);//[88,77]

arry=arr1.slice(0, 1); // Get sub-array from index 0 to 1
console.log(arry); // [0, 4]

arr1.reverse(); // Reverse order
console.log(arr1); // [4, 0]

arr1.splice(1, 0, 2, 3); // Insert 2, 3 at index 1
console.log(arr1); // [4, 2, 3, 0]

arr1.sort();
console.log(arr1);//[0,2,3,4]

const re=arr1.replace(2,6);//will replace only the first 2
console.log(re);
//replaceAll

const res=arr1.split(",");
console.log(res);

console.log(arr1.join(","));

//split()-string->array
//join()-array->string


let arr2 = [10, 20, 30,40,50];

let newarrr=arr1.concat(arr2);//[0,2,3,4,10,20,30,40,50]

// let neww1=arr2.concat(arr1) [10,20,30,40,50,0,2,3,4]

let wer=arr2.includes(20);//true

let arrpd=arr2.sort(function(a,b){return a-b}); // Sort ascending
console.log(arrpd); // [10, 20, 30, 40, 50]

let arre=arr2.sort(function(a,b){return b-a}); // Sort descending
console.log(arre); // [50, 40, 30, 20, 10]

let arr4=[5, 10, 15];
arr4.forEach(function(value){
    console.log(value);
}); // Print each value 

arr4.forEach(function(value){
    console.log(value*2);
}); // Print each value multiplied by 2

//Iterating Arrays

//Map()- jabhi use karna hai tab aapko naya array chaiye purane array ke basis par 
//Returns a new array with modified values. will be of same length as original.

let numbers = [1, 2, 3, 4];
let doubled = numbers.map(function(num) {
    return num * 2;
});
console.log(doubled); // [2, 4, 6, 8]

let newaar=numbers.map(function(num){
    if(num>2)return num;
})
console.log(newaar); // [undefined, undefined, 3, 4]
//map mai agar condition lagayi aur vo false aayi toh usi jagah array mai undefined a aajyegea

//Filter()- jabhi use karna hai tab aapko purane array ke basis par naya array chaiye jisme kuch elements filter ho gaye ho

let mixedNumbers = [1, 2, 3, 4, 5, 6];
let evenNumbers = mixedNumbers.filter(function(num) {
    return num % 2 === 0;
});
console.log(evenNumbers); // [2, 4, 6]
let neear=mixedNumbers.filter(function(num){
    if(num>3)return num;
})
console.log(neear); // [4, 5, 6]

//Reduce()- jabhi use karna hai tab aapko ek single value chaiye purane array se kuch calculation karke

let values = [10, 20, 30];
let sum = values.reduce(function(accumulator, val) {
    return accumulator + val;
}, 0);
console.log(sum); // 60

//find-

let car=values.find(function(val){
    return val>20;
})
console.log(car); // 30

let car1=values.find(function(val){
    return val>=20;
})
console.log(car1); // 20


//some()- returns true if at least one element satisfies the condition
 
let hasLargeNumber = values.some(function(val) {
    return val > 25;
});
console.log(hasLargeNumber); // true

//every()- returns true only if all elements satisfy the condition

let allLargeNumbers = values.every(function(val) {
    return val > 25;
});
console.log(allLargeNumbers); // false

//Deconstructuring Arrays

let arrt=[100, 200, 300];
let [x, y] = arrt;
console.log(x); // 100
console.log(y); // 200
//You can skip elements by leaving gaps in the destructuring pattern
let [a, , b] = arrt;
console.log(a); // 100
console.log(b); // 300

//Spread Operator with Arrays

let arrp=[1,2,3];
let arrq=[4,5,6];
let combined=[...arrp,...arrq];
console.log(combined); // [1, 2, 3, 4, 5, 6]
let copyArr=[...arrp];
console.log(copyArr); // [1, 2, 3]
//using spread operator we can copy array without affecting original array
//if we remove a element from copyArr original arrp will remain same


//splice changes original array, slice does not
//forEach vs map : map returns a new array

//template literals

const name="tanya";
const age=19;
const messa=`my name is ${name} and i am ${age}`;
console.log(messa);
console.log(`my name is ${name} and i am ${age}`); 

//Exercises:

// 1.Create an array of your favorite fruits and print the first fruit.

let fruits = ["mango", "grape", "kiwi", "banana"];
console.log(fruits[0]);

// 2.Add a new fruit to the end of the array and print the updated array.

fruits.push("orange");
console.log(fruits);

// 3.Remove the last fruit from the array and print the updated array.

fruits.pop();
console.log(fruits);

// 4.Use a for loop to print all elements of an array.

let arrs = ["apple", "banana", "orange","papaya","berry"];
for(let i =0; i < arrs.length; i++){
    console.log(arrs[i]);
}
// 5.Use a while loop to print all elements of an array.

let i = 0;
while(i < arrs.length){
    console.log(arrs[i]);
    i++;
}

//6.Use map() to double all numbers in an array

let gra=[1,2,3,4,5];
let doub=gra.map(function(val){
    return val*2;
});
console.log(doub); // [2,4,6,8,10]

//7.Use filter() to get numbers greater than 10

let numbs=[5,12,8,20,3,15];
let greaterthanten=numbs.filter(function(valu){
    return valu>10;
});
console.log(greaterthanten); // [12,20,15]

//8.Use reduce() to find the sum of all numbers in an array

let sumarr=[1,2,3,4,5];
let total=sumarr.reduce(function(acc, val){
    return acc+val;
}  ,0);
console.log(total); // 15

//9.Find the second largest number in an array

let arrnum=[10,5,20,8,15];
arrnum.sort(function(a,b){return b-a});
console.log(arrnum[1]); // 15   

//10.find the largest number in an array

let arrnumb=[10,5,20,8,15];
arrnumb.sort(function(a,b){return b-a});
console.log(arrnumb[0]); // 20  

//11.Find the smallest number in an array

let arrnumbq=[10,5,20,8,15];
arrnumbq.sort(function(a,b){return a-b});
console.log(arrnumbq[0]); // 5

//12.Find the index of a given element

let arrindex=[10,20,30,40,50];
let index=arrindex.indexOf(30);
console.log(index); // 2

//13.Count how many elements are in an array

let arrcount=[1,2,3,4,5,6,7,8,9];
console.log(arrcount.length); // 9

//14.merge two arrays

let arrpq=[1,2,3];
let arrqq=[4,5,6];
let combinedq=[...arrpq,...arrqq];
console.log(combinedq); // [1, 2, 3, 4, 5, 6]

//15.wa function that uses object destructring inside function parameter to extract and print name and age 

let arrw=[{name:"chetan", age:20, city:"jaipur"},
{name:"rahul", age:22, city:"delhi"},
{name:"sonam", age:19, city:"mumbai"}];
function printPerson(arrw){
    let [{name, age}] = arrw;
    console.log(`Name: ${name}, Age: ${age}`);
}
printPerson(arrw); // Name: chetan, Age: 20

//16. using spread add"india" in this arr

let arrcountry=["usa", "uk", "canada"];
let updatedArr=["india", ...arrcountry];
console.log(updatedArr); // ["india", "usa", "uk", "canada"]

// 17. Remove Items with `splice`

let topics = ["HTML", "CSS", "JavaScript", "React", "Node.js"];
//Remove `"JavaScript"` and `"React"` using **one `splice()` call**.
topics.splice(2,2);
console.log(topics);

//18. Insert and Replace with `splice`

let roadmap = ["HTML", "CSS", "React"];
//Insert `"JavaScript"` between `"CSS"` and `"React"` without removing anything.
//Then replace `"CSS"` with `"Tailwind CSS"` using `splice()`.
roadmap.splice(2,0,'Javascript');
console.log(roadmap);
roadmap.splice(1,1,'Tailwind CSS');
console.log(roadmap);