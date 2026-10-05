//for loop
for(i=0;i<5;i++){
  console.log(i);
}

//while loop

let j=0;
while(j<5){
  console.log(j);
  j++
}//will run untill condition satisfies

//do while loop
let k=0
do{
  console.log(k);
  k++;
}//do will run atleast once
while(k<5);

// while and do while works best if number of iterations is unknown

//output of all the three progress will be 
/*0
 1
 2
 3
 4*/

//break and continue 
//break-exit loop completely
//continue-skip current loop and move to next 

//for-of -(for array and strings)
for (let char of "tanya"){
  console.log(char);
}
//forEach-(cleaner than for for arrays but can't break or return)
let nums=[10,20,30];
nums.forEach((num)=>{
  console.log(num);
});

//for-in-(for objects nots arrays)
let user={name:"harsh",age:26};
for(let key in user){
  console.log(key,user[key]);
}


