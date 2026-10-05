
const form = document.getElementById("form");

const email = document.getElementById("email");
const password = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const error= document.getElementsByClassName("error");
const result = document.getElementById("result");

// EMAIL REGEX
const emailRegex =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


// PASSWORD REGEX
// Minimum 8 characters
// At least 1 uppercase
// At least 1 lowercase
// At least 1 number
// At least 1 special character

const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%#*?&])[A-Za-z\d@$!%*#?&]{8,}$/;


// Form Submit
form.addEventListener("submit", function(event) {   
    
    event.preventDefault();
    emailError.textContent = "";
    passwordError.textContent = "";
    result.textContent = "";
    emailError.style.display = "none";
    passwordError.style.display = "none";
    result.style.display = "none";
    // Prevent page refresh
    let isVlid=true;

    const emailValue = emailRegex.test(email.value);
    const passwordValue = passwordRegex.test(password.value);   
    if(!emailValue){
        emailError.textContent = "Enter a valid email address";
        emailError.style.color = "red";
        emailError.style.display = "initial";
        isVlid=false;
    }

    if(!passwordValue){
        passwordError.textContent =
            "Password must contain 8+ characters, uppercase, lowercase, number and special character";
        passwordError.style.color = "red";
        passwordError.style.display = "initial";
        isVlid=false;
    }

    if(isVlid){
        result.style.display = "initial";
        result.textContent = "Registration successful!";
        result.style.color = "green";
    }
});



