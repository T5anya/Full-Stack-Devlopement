//1)-

let output = document.getElementById('output');
      async function getData() {
         try {
            let response = await fetch('https://api.github.com/users'); 
            // Pauses the execution until it gets the data
            let data = await response.json(); 
            // Pauses the execution until it converts the data into json
            output.innerHTML += "login: " + data[0].login + "<br>";
            output.innerHTML += "id: " + data[0].id + "<br>";
            output.innerHTML += "node_id: " + data[0].node_id + "<br>";
            output.innerHTML += "avatar_url: " + data[0].avatar_url + "<br>";
         } 
         catch (err) {
            output.innerHTML += "The error is: " + json.stringify(err);
         }
    }
getData();

//2)-

async function login(username, password) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (username === "admin" && password === "1234") {

                resolve("Login successful ✅");

            } else {

                reject("Invalid username or password ❌");

            }

        }, 2000);

    });

}

login("admin", "1234")
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });


//3-

async function login1(username, password) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (username === "admin" && password === "1234") {

                resolve("Login successful ✅");

            } else {

                reject("Invalid username or password ❌");

            }

        }, 2000);

    });

}

async function startLogin() {

    try {

        const result = await login1("admin", "12345");

        console.log(result);

    } catch (error) {

        console.log(error);

    }

}

startLogin();

//3)-

function checkRoom() {
    return new Promise((resolve) => {
        console.log("Checking room...");
        setTimeout(() => {
            resolve("Room available ✅");
        }, 2000);
    });
}

function createBooking() {

    return new Promise((resolve) => {

        console.log("Creating booking...");

        setTimeout(() => {

            resolve("Booking created ✅");

        }, 2000);

    });

}

function sendConfirmation() {

    return new Promise((resolve) => {

        console.log("Sending confirmation...");

        setTimeout(() => {

            resolve("Email sent ✅");

        }, 2000);

    });

}

async function bookHotel() {
    try {
        const room = await checkRoom();

        console.log(room);

        const booking = await createBooking();

        console.log(booking);

        const email = await sendConfirmation();

        console.log(email);

        console.log("Hotel booking completed 🎉");

    } catch (error) {

        console.log("Booking failed ❌");

    }

}

bookHotel();

//4)-
function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("User data");
        }, 2000);
    });

}
function getRooms() {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve("Room data");
        }, 2000);

    });

}
function getReviews() {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve("Review data");
        }, 2000);

    });

}
async function loadHotelPage() {

    const [user, rooms, reviews] = await Promise.all([
        getUser(),
        getRooms(),
        getReviews()
    ]);

    console.log(user);
    console.log(rooms);
    console.log(reviews);

}
loadHotelPage();

//5)-

async function getUsers() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    console.log(users);
}
getUsers();