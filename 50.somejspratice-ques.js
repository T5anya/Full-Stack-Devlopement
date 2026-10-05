//1️⃣ Reverse a String (without using reverse())

let str="JavaScript";
let reversedStr="";
for(let char of str){
    reversedStr=char+reversedStr;
}
console.log(reversedStr); // tpircSavaJ

//2️⃣ Check for Palindrome-

let str2="madam";
let reversedStr2="";
for(let char of str2){
    reversedStr2=char+reversedStr2;
}
if(str2===reversedStr2){
    console.log(`${str2} is a Palindrome`);
}   
else{
    console.log(`${str2} is not a Palindrome`);
}
// madam is a Palindrome

//3️⃣ Find the largest number in an array-

let numbers=[3,5,7,2,8,1];
let largest=numbers[0];

for(let num of numbers){
    if(num>largest){
        largest=num;
    }   
}
console.log(`The largest number is ${largest}`); // The largest number is 8

//4️⃣ Count Occurrences of Each Character-
//Input: "aabbbc" ,Output: { a: 2, b: 3, c: 1 }

let str3="aabbbc";
let charCount={};
for(let char of str3){
    if(charCount[char]){
        charCount[char]++;
    }
    else{
        charCount[char]=1;
    }
}
console.log(charCount); // { a: 2, b: 3, c: 1 }


//5️⃣- FizzBuzz (Tricky Version)
//Print numbers from 1 to 50:
//Fizz → divisible by 3
//Buzz → divisible by 5
//FizzBuzz → divisible by both
//Otherwise print the number

for(let i=1; i<=50;i++){
    if(i%=3){
        console.log("fizz")
    }
    else if(i%=5){
        console.log("buzz")
    }
    else if((i%=3) && (i%=5)){
        console.log("fizzbuzz")
    }
}
