//operators 

//Practice -

//1--Create two numbers a = 10 and b = 3. Perform and console.log: a+b, a-b, a*b, a/b, a % b.

let a=10;
let b=3;
console.log(a+b);//13
console.log(a-b);//7
console.log(a*b);//30
console.log(a/b);//3.3333..
console.log(a%b);//1 remainder

//2--Write: let x = 5; x = x + 3;
//Now rewrite the same using +=.
//Do the same for -=,*=, /=.

let x=5;
//x=x+3;
console.log(x+=3);
console.log(x-=3);
console.log(x*=3);
console.log(x/=3);

//3-let count = 5;
//Use count++ and log value before and after.
//Repeat for count--.

let count=5;
console.log(count++,count)// 5 6
console.log(count--,count)// 6 5
console.log(++count,count)// 6 6
console.log(--count,count)// 5 5

let i=1;
console.log(i++,i); //1 2
console.log(++i,i);// 3 3

//4-Compare two values: 5 == "5" and 5 === "5", 
//Observe difference.

let a = 5;
let b = "5"
console.log(a==b);//true 
console.log(a===b);//false

//5-Check if 10 is greater than 5, less than 20, and equal to 10.

 let a = 10;
console.log(a>5);//true
console.log(a<20);//true
console.log(a==10);//true

//6-Try logical AND and OR:
//true && false
//true||false
//!(true)

console.log(true && false)//false
console.log(true||false)//true
console.log(!(true))//false

//7- observe the answer 
// (5 > 3 && 10 > 8),
// (5 > 3 || 10 < 8)

console.log(5>3 && 10>8);//true
console.log(5>3 || 10<8);//true

//8- observe the answer 
5&1 
5|1
console.log(5&1);//1
console.log(5|1);//5
// & (AND) keeps only the bits that are 1 in both numbers.
// | (OR) keeps the bits that are 1 in either number.


//9- can we access b

console.log(b);
let b = 5;
//ReferenceError: Cannot access 'b' before initialization

let n=5;
let result=n++ + ++n;//5+7
console.log(result)//12

let score=78;
let grade=score>=90?"A":score>=75?"B":score>=60?"C":"Fail";
console.log(grade)//B

