/*

Promises-
A JavaScript promise is an object that represents the completion or failure of an asynchronous operation. It employs callback functions to manage asynchronous operations, offering a easier syntax for handling such operations more easily.

A promise object can created using the Promise() constructor. The promise constructor takes a callback function as an argument. The callback function accepts two functions, resolve() and reject(), as arguments. The resolve function is called if the promise returns successfully. The reject function is called when taks fails and returns the reason.
 promises are of three states-
 Promise states
Pending

Operation hasn't finished.

Pending
Fulfilled

Operation succeeded.

Fulfilled
Rejected

Operation failed.

Rejected

once a promies settles it can't change states

*/

const promise = new Promise(
    (resolve, reject) => {

        const success = true;

        if (success) {
            resolve("Success!");//promise is fullfilled
        } else {
            reject(new Error("Something went wrong"));//promise is rejectec
        }

    }
);

/*
.then()-works when a promise is resolved or fulfilled

promise.then(
    (result) => {
        console.log(result);
    }
);

.catch()-works when a promise is rejected

promise.catch(
    (error) => {
        console.log(error);
    }
);

both accpets a callback function

.finally()-runs regardless of succes or failure.

promise
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    })
    .finally(() => {
        console.log("Finished");
    });

*/
const prom = new Promise(
    (resolve, reject) => {

        const success = true;

        if (success) {
            resolve("Success!");//promise is fullfilled
        } else {
            reject(new Error("Something went wrong"));//promise is rejectec
        }

    }
);
prom.then(function(val){
    console.log(val);//success
})
.catch(function(val){
    console.log(val);
});



let pr=new Promise(function (res,rej){
    setTimeout(()=>{
        let rn=Math.floor(Math.random()*10);
        if (rn>5) res(rn);
        else rej(rn);
    },3000);
});

pr
.then(function(val){
    console.log(val);
})
.catch(function(val){
    console.log(val);
})


/*Promise chaining-
Promise
   .then(callback);
   .then(callback);
   ...
   .then(callback);

*/

const promise1 = new Promise((resolve, reject) => {
         resolve(2);
      });

      // Promise chaining
      promise1
      .then((value) => {
         console.log("The square of 2 is " + value * 2 + "<br>");
         return value * 2; // Returning a promise for next then() method
      })
      .then((value) => {
         console.log("The square of 4 is " + value * 2 + "<br>");
         return value * 2;
      })
      .then((value) => {
         console.log("The square of 8 is " + value * 2 + "<br>");
      });



/*output-
The square of 2 is 4
The square of 4 is 8
The square of 8 is 16



promise Method	Behavior
Promise.all()	All must fulfill
Promise.allSettled()	Wait for all
Promise.race()	First settled wins
Promise.any()	First fulfilled winsmise chaining-a series or chain of .then()
 
Async-

A JavaScript function defined with the async keyword is called the asynchronous function. The async function allows you to produce the asynchronous code.

It always returns the promise. If you don't return the promise manually and return the data, string, number, etc., it creates a new promise and resolves that promise with the returned value.
every Async function returns a promise
*/


async function printMessage() {
   return "Hello World";
}
//The below code is similar to the above code.

function printMessag() {
   return Promise.resolve("Hello World");
}

//Promise { "Hello World" }


async function getText() {
         return "Text from the getText() function.";
}
const result=getText();
console.log(result);

      getText().then((text) => {
         document.getElementById('output').innerHTML = text + "<br>";
      }).catch((err) => {
         document.getElementById('output').innerHTML += JSON.stringify(err);
      });


function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ id: userId, name: "John Doe" });
        }, 1000);
    });
}

function fetchUserPosts(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                { title: "Post 1", author: user.name },
                { title: "Post 2", author: user.name }
            ]);
        }, 1000);
    });
}

// Chaining Promises
fetchUserData(123)//{ id:123 , name:"John Doe"}
    .then((user) => {
        console.log("User:", user);
        return fetchUserPosts(user);//[{ title: "Post 1", author: "John Doe" },{ title: "Post 2", author:"John Doe"  }]
    })
    .then((posts) => {
        console.log("Posts:", posts);
    })
    .catch((error) => {
        console.log("Error:", error);
    }
);


/*
Await-
You can use the await keyword inside a JavaScript asynchronous function only. It pauses the execution of the function until the promise gets settled, which means it is either rejected or fulfilled.
Wait for this Promise to finish, then give me its result.
*/

function wait() {
    return new Promise((resolve) => {

        setTimeout(() => {
            resolve("Done!");
        }, 3000);

    });
}
async function test() {

    console.log("A");

    const result = await wait();

    console.log(result);

    console.log("B");
}

test();

/*
Output:

A

Then after 3 seconds:

Done!
B

Why?

Because:

await wait();

means:

"I need the result of wait() before continuing this async function."
*/

async function testa() {

    console.log("Inside");

    await wait();

    console.log("After wait");

}

console.log("Start");

testa();

console.log("End");

/*
Output:

Start
Inside
End

Then after 3 seconds:

After wait
*/


async function getUserDataAndPosts(userId) {
    try {
        const user = await fetchUserData(userId);
        console.log("User:", user);

        const posts = await fetchUserPosts(user);
        console.log("Posts:", posts);

        return posts;
    } catch (error) {
        console.log("Error:", error);
        throw error; // Re-throw the error if needed
    }
}

getUserDataAndPosts(123);

function getData() {

    return new Promise(resolve => {

        setTimeout(() => {
            resolve("Data received");
        }, 2000);

    });
}

async function main() {

    const data = await getData();

    console.log(data);
}

main();


//error handling 

async function loadData() {

    try {
        const data = await getData();
        console.log(data);
    }

    catch (error) {
        console.error(error);
    }

    finally {
        console.log("Finished");
    }
}

async function loadEverything() {

    const user = await getUser();

    const posts = await getPosts(user.id);

    const comments = await getComments(posts);

    console.log(comments);

}


/*
const data = fetch("https://example.com");

console.log(data);

They expect:

actual data

But fetch() returns a:

Promise

So we do:

const response = await fetch("https://example.com");

Then we often need:

const data = await response.json();

Notice there are two asynchronous operations.
*/


//Abort Controller-
// What if a user searches:

// hot
// hote
// hotel
// hotel delhi
// hotel delhi 5 star

// and old requests are still running?

// You can cancel a request.

// const controller = new AbortController();

// fetch("/api/hotels", {
//     signal: controller.signal
// });

// Cancel:

// controller.abort();


// hotelApi.js

export async function searchHotels(filters) {

    const params = new URLSearchParams(filters);

    //const response =await fetch(`/api/hotels?${params}`);

    if(!response.ok) {
        throw new Error("Unable to load hotels");
    }

    return response.json();
}

const hotels = await searchHotels({
    city: "Lucknow",
    maxPrice: 5000,
    rating: 4
}); 