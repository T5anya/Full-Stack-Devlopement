/*
What is a Server?

A server is essentially a computer/system that provides services or resources to other computers over a network.

For example:

Your Phone
     │
     │ Internet
     ↓
Web Server

When you visit a website, your device communicates with a server.

The server might be running:

Node.js
+
Express
+
Database


Client

The device/application making a request.

For example:

Chrome
Firefox
Mobile App
React application
Server

The system receiving the request and providing a response.

Client                 Server

Browser ─────────────→ Backend
        Request

Browser ←───────────── Backend
        Response

This is called the:

Client-Server Architecture

1)JSON.stringify()-
Converts JavaScript object → JSON string.

const user = {
    name: "Tanya",
    age: 20
};
const jsonData = JSON.stringify(user);
console.log(jsonData);

JSON.parse()-
Converts JSON string → JavaScript object.

const jsonData = '{"name":"Tanya","age":20}';
const user = JSON.parse(jsonData);
console.log(user.name);

Output:
Tanya

Remember:
JSON.stringify()
Object → JSON string

JSON.parse()
JSON string → Object


DNS stands for:
Domain Name System
Think of DNS as the internet's phonebook/directory.
You enter:
example.com
DNS helps determine the IP address associated with that domain.


A request is basically the browser saying:
"Hey server, I need this resource/data."

For example:
GET /products
means approximately:
Give me the products resource.

Another example:
POST /users
means approximately:
I want to send user information to the server.


HTTPS METHODS-
Example:

GET /users
Get users.

POST /users
Create a user.

PATCH /users/25
Update user 25.

DELETE /users/25
Delete user 25.


Backend Receives the Request

Backend Talks to Database and then backend creates response in json file

So the complete flow becomes:

USER
 ↓
BROWSER
 ↓
HTTP REQUEST
 ↓
SERVER
 ↓
BACKEND
 ↓
DATABASE
 ↓
BACKEND
 ↓
HTTP RESPONSE
 ↓
BROWSER
 ↓
UI


API means:
Application Programming Interface
In backend development, you'll frequently hear:

"Create an API."
An API provides a way for different software components to communicate.

For example:
React frontend
       ↓
      API
       ↓
Node.js backend
       ↓
    Database

The frontend doesn't directly need to manipulate the database.
Instead:
Frontend → API → Backend → Database

What is a Database?
A database stores information so your application can retrieve and manage it.

SQL
Examples:

MySQL
PostgreSQL
SQL Server

Data is generally organized into tables.
Users

id | name   | email
1  | Tanya  | ...
2  | Rahul  | ...

NoSQL

Example:
MongoDB

Data is generally stored as documents.
{
  "_id": 1,
  "name": "Tanya",
  "email": "tanya@example.com"
}

Authentication vs Authorization
These two are often confused.

Authentication
Who are you?

Example:
Email + Password
       ↓
Login

Backend determines:

This is Tanya.

Authorization
What are you allowed to do?
Example:

Tanya → USER
Admin → ADMIN

Tanya:

View bookings ✅
Cancel own booking ✅
Delete all users ❌

Admin:

View bookings ✅
Delete users ✅
Manage rooms ✅
View revenue ✅



*/
//Some questions-
//1)-. Find users whose age is 18 or above

const users = [
    { id: 1, name: "Tanya", age: 20 },
    { id: 2, name: "Rahul", age: 21 },
    { id: 3, name: "Ananya", age: 17 },
    { id: 4, name: "Priya", age: 22 },
    { id: 5, name: "Arjun", age: 16 }
];
const ag=users.filter(user=>{
        if (user.age>18) return user;
});
console.log(ag);

//2)-Find only admins

const users1 = [
    { id: 1, name: "A", role: "user" },
    { id: 2, name: "B", role: "admin" },
    { id: 3, name: "C", role: "user" }
];
const admin=users1.filter(user=>{
        return user.role=="admin";
});
console.log(admin);

