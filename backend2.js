const express=require('express');

const app=express();

app.get("/",(req,res)=>{
    res.send(" hiii hello world");
})

app.get("/about",(req,res)=>{
    res.send("about page");
})

app.listen(3000);

/*

npm -init -y =>node.js application initiate krti hai aur package.json file folder mai download krti hai
npm express=> install express package and package-lock.json
we have to use both of these commands in every folder we use node.js and want to build backend


hat is a package?

A package is reusable code created by developers.
For example:
express
bcrypt
jsonwebtoken
dotenv
cors
multer
mongoose
Instead of writing everything ourselves, we can use these packages.

TYPES OF NODE MODULES-
1)- ES6 Modules (ECMAScript Modules - ESM)

Uses import to import modules.
Uses export to export functions, objects, or variables.
Modules are loaded asynchronously, allowing better performance.
Requires "type": "module" in package.json.


2)-CommonJS Modules (CJS)

Uses module.exports to export values from a module.
Uses require() to import modules.
Supports exporting functions, objects, or variables.
Designed for server-side JavaScript in Node.js.

if want to export anything from another filee  works in es module
ex-
utility.js-
export a=5;
export b=6;

const obj={
x:8,y:2};
export default obj;

main.js-
import {a,b} from "./utility.js"
console.log(a,b); 5 6
console.log(obj) ;  { x:8,y:2}

for cjs module

utility.js-
module.exports={
x:5,
y:7}

main.js-
const a=require("./utility.js");
console.log(a);

*/