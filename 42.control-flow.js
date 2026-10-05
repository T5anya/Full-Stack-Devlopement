//1-

let age=15
//let age = prompt("Enter your age ");
if(age > 18){
     console.log("Adult");
}else{
    console.log("Minor");
}

//2-

let marks=65
//let marks=prompt("enter the marks of student");
if (marks>=90){
  console.log("A")
}
else if(marks>=80){
  console.log("B")
}
else if(marks>=70){
  console.log("C")
}
else if (marks>=60){
  console.log("D")
}
else{
  console.log("Fail")
} 

//3-

let city="delhi";
if (city=="bhopal"){
  console.log("Mp")
}
else if(city=="delhi"){
  console.log("capital")
}
else{
  console.log("unknown city")
}

//4-

let score = 69;
 let result = score > 35 ? "Passs" : "fail";
console.log(result);

//5-

 let temp = 69;
let result1 = temp > 30 ? "hot" : "Pleasant";
 console.log(result1);

 //6-

 let day = 5;
 switch(day){
     case 1: console.log("sunday")
     break;
     case 2: console.log("monday")
     break;
   case 3: console.log("tuesday")
     break;
   case 4: console.log("wednesday")
    break;
     case 5: console.log("thursday")
    break;
     case 6: console.log("friday")
     break;
     case 7: console.log("saturday")
     break;
     default: console.log("invalid day");
 }

//7- 
function getvar(value){
  if(value<=100 && value>=90){ return "A" ;}
  else if (value<=89 & value>=80) {return "B" ;}
  else if (value>=70 && value<=79) {return "C" ;}
    else if (value>=60 && value<=69) {return "D" ;}
  else if (value>=33 && value<=59) {return "E" ;}
  else if (value<=32) return "fail"; 

}
let value=15;
 console.log(getvar(value)) //fail

//8- rock paper scoissor

function rps(user,computer){
 if (user==computer) return "draw" ;
 else if (user=="rock" && computer=="scissor")  return " user"; 
 else if (user=="scissor" && computer=="rock")  return " computer"; 
 else if (user=="paper" && computer=="scissor")  return " computer";
 else if (user=="scissor" && computer=="paper")  return " user";
 else if (user=="rock" && computer=="paper")  return " computer";
 else if (user=="paper" && computer=="rock")  return " user";
}
 console.log(rps("paper","rock") )