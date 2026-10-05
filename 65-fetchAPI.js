/*
FETCH API-
The Fetch API is a built-in JavaScript API used to make HTTP requests from your browser.

basic-
fetch("https://example.com");

But this alone isn't very useful because we haven't handled the response.
*/

fetch("https://example.com")
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });

//You can check whether the HTTP response indicates success:

fetch("https://example.com")
    .then(response => {

        if (!response.ok) {
            throw new Error("Request failed");
        }

        console.log("Success");

    });

/*

HTTP status codes

You need to know these.

2xx — Success
200 OK
201 Created
204 No Content
3xx — Redirection

Examples:

301
302
304
4xx — Client-side/request problem
400 Bad Request
401 Unauthorized
403 Forbidden
404 Not Found
409 Conflict
422 Unprocessable Content
5xx — Server problem
500 Internal Server Error
502 Bad Gateway
503 Service Unavailable

*/


async function getUser() {

  try {

    const response = await fetch("/api/users");

    const data = await response.json();

    console.log(data);

  } catch (error) {

    console.error(error);

  }
}
getUser();


async function getData() {
  const url = "https://example.org/products.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
}
getData();


//GET data-GET retrieves data.

async function getUsers() {

  const response = await fetch("/api/users");

  const users = await response.json();

  console.log(users);
}
getUsers();

/* GET With Query Parameters
Suppose you want:
/api/users?search=tanya
 */

const params = new URLSearchParams({
  search: "tanya",
  page: 1
});
//const response = await fetch(`/api/users?${params}`);
//result -/api/users?search=tanya&page=1


//POST data-POST is commonly used to create/send data.

async function createUser(userData) {
  try {
    const response = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    });
    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Create user error:", error);
  }
}
createUser({
  name: "Tanya",
  email: "tanya@example.com"
});


//PUT data-to replace or update data

/*  await fetch("/api/users/10", {

    method: "PUT",

    headers: {
      "Content-Type": "application/json"
    },

    body: JSON.stringify({
      name: "Tanya",
      age: 22
    })

  }); 


//PATCH data- for partial update
//For example, if you only want to change the name:

  await fetch("/api/users/10", {

    method: "PATCH",

    headers: {
      "Content-Type": "application/json"
    },

    body: JSON.stringify({
      name: "Tanya Sharma"
    })

  });

// DELETE data-

  await fetch("/api/users/10", {
    method: "DELETE"
  });
 */


  //for file uploads--
  const formData = new FormData();

  formData.append("name", "Tanya");
  formData.append("profilePicture", file);
  fetch("/api/profile", {

    method: "POST",

    body: formData

  });


  //fetching images/files
  async function file(){
    const respone = await fetch("/image.jpg");

    const blob = await respone.blob();

    const imageURL = URL.createObjectURL(blob);

    document.querySelector("img").src = imageURL;
  }
  file();


// Async function to download files
function myDisplayer(value){
  document.getElementById("output").innerHTML+=value+"<br>";
}
async function loadData() {
  const [customerResponse, productsResponse, newsResponse] = await Promise.all([
    fetch("customer.json"),
    fetch("products.json"),
    fetch("news.json")
  ]);
  const customer = await customerResponse.json();
  const products = await productsResponse.json();
  const news = await newsResponse.json();
  myDisplayer("Custome name: " + customer.name);
  myDisplayer(products.length + " products");
  myDisplayer(news.length + " news items");
}

loadData();
async function geuser(){
    try {
      const response =await fetch("/api/user");
        if (!response.ok) {
            throw new Error(
                `HTTP error: ${response.status}`
            );
        }
        const data =await response.json();
        console.log(data);
    }
    catch (error) {
        console.error("Failed to fetch user:", error);
    }
  }
geuser();

/* Loading state
Real applications usually need:
 */
async function use(){
  let loading = true;
  try {
    const response =await fetch("/api/users");
    const users =await response.json();
  }
  catch (error) {
    console.error(error);
  }
  finally {
   loading = false;
  }
}
use();

/* // CORS-

A very important full-stack concept.
Suppose:
React
http://localhost:5173
       ↓
Express
http://localhost:5000

These are different origins.
The browser applies CORS (Cross-Origin Resource Sharing) rules.
Your Express server may need:

const cors = require("cors");
app.use(cors());

For credentials, configuration is more specific:

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

And frontend:

fetch("http://localhost:5000/api/profile", {
  credentials: "include"
}); 

//ABORTCONTROLLER- 

const controller = new AbortController();

fetch("/api/search?q=tanya", {
  signal: controller.signal
});
Cancel it:

controller.abort(); */


/* 
//Fetch + Node.js + Express

This is the part you should eventually master.

Frontend-
const response = await fetch(
  "http://localhost:5000/api/users"
);
const data = await response.json();

Backend-
app.get("/api/users", async (req, res) => {

  const [users] = await db.query(
    "SELECT * FROM users"
  );

  res.json(users);

});

Database=
MySQL
   ↓
users table
   ↓
Express
   ↓
JSON
   ↓
Fetch
   ↓
React

This is the basic architecture of your full-stack applications. */

