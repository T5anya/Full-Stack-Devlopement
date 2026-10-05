//Basic Validation − First of all, the form must be checked to make sure all the 
// mandatory fields are filled in. It would require just a loop through each field 
// in the form and check for data.

//Data Format Validation − Secondly, the data that is entered must be checked for 
// correct form and value. Your code must include appropriate logic to test correctness 
// of data.

const name=document.querySelector("#name");
const form=document.querySelector("form");
const email=document.querySelector("#email");


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    //const usernameRegex = /^[a-zA-Z0-9_]{3,16}$/;
    if(name.value.length<=3){
        document.querySelector(".hid").style.display="initial";
    }
    else{
        document.querySelector(".hid").style.display="none";
    }

    const regex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const ans=regex.test(email.value);
    console.log(ans);


});


const password=document.querySelector("#password");

