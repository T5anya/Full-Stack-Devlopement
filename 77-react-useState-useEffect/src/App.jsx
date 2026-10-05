import { useState,useEffect } from 'react'
import Hotels from './components/hotels';
function App(){
  //useState-
  const [name, setName] = useState("");
  
  //useEffect-

  const [count, setCount] = useState(0);
  const[timer,settimer]=useState(0);
  const[running,setrunning]=useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
    console.log(count);
  }, [count]);

  useEffect(() => {
    if (!running) return;
  const timer = setInterval(() => {
    settimer(prev=>prev+1);
    console.log("running");
  }, 1000);
  return () => {
    clearInterval(timer);
  };
  }, [running]);


  return (
    <>
        <input
            value={name}
            onChange={(e) => setName(e.target.value)}
        />

        <h1>Hello {name}</h1>
        <button onClick={() => setCount(count + 1)}>
            {count}
        </button>

        <h1>{timer}</h1>
        <button onClick={() => setrunning(true)}>
            start
        </button>
        <button onClick={() => setrunning(false)}>
            stop
        </button>
        <button onClick={() => settimer(0)}>
            reset
        </button>
        <Hotels/>
    </>
  );
}

export default App;

/*
Rendering-
That process of taking your React code and showing the result on the webpage is called rendering.
Rendering in React is the process where React takes the component's code and determines what should appear on the webpage. When the relevant data changes, React renders the component again and updates the necessary parts of the UI.


When does React render?
There are two important situations you should understand initially.

1. First time your app loads
When your React application starts:

function App() {
  return <h1>Hello</h1>;
}
React renders App.

React starts
     ↓
App component
     ↓
Render
     ↓
<h1>Hello</h1> appears
This is called the initial render.

2. When something changes
Suppose we have a counter:

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

Initially:
count = 0

Screen:
0
[Increase]

You click the button.
Now:
count = 1

React realizes:
"Something changed. I need to render again."

So the screen becomes:
1
[Increase]

Click again:
2
[Increase]
And so on.

React doesn't normally throw away the entire webpage and reload everything from scratch.
Instead, React determines what needs to change and updates the necessary DOM.

When we say:
"The component rendered again"

it doesn't necessarily mean:
"The entire webpage was recreated."

React can call the component again, calculate what the UI should look like, compare it with the previous result, and update only the necessary DOM parts.



React HOOKS-

A Hook is a special React function that lets a functional component use React features.
React Hooks are functions (like useState, useEffect, useContext, useRef, and useReducer) that let functional components manage state, side effects, context, and more without using classes,
Hooks let you use different React features from your components. You can either use the built-in Hooks or combine them to build your own.

Other Hooks include:

useState()
useEffect()
useRef()
useMemo()
useCallback()
useContext()
useReducer()

And you can create your own:

useHotelSearch()
useAuth()
useFetch()
useBooking()

Hooks allow a component to connect itself to React's internal behavior.

Why were Hooks introduced?
Older React applications commonly used class components.
Hooks allowed functional components to use features such as state and effects without needing classes.
Modern React primarily uses functional components + hooks.

A side effect is an operation that happens outside the simple calculation of the component's UI.
Examples:

API request
Timer
Changing document title
Browser storage
Event listener
Subscription
WebSocket connection

For example:
fetch("/api/hotels");
This interacts with something outside the component's rendering calculation.


RULES-
Rule #1 — Don't call Hooks inside conditions-not under any nested functions,if,loops etc
Call Hooks at the top level

Rule #2 — Hooks should be used from React functionslike functional components,custom hooks not random calls.

HOOKS-

1)-useState-
The React useState Hook allows us to track state in a function component.
We initialize our state by calling useState in our function component.

useState accepts an initial state and returns two values:
The current state.
A function that updates the state.

for ex-
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(prev=>(prev+1))}>Increment</button>
      <button onClick={() => setCount(prev=>(prev-1))}>Decrement</button>
    </div>
  );
}
Use cases: counters, toggles, form inputs, UI states.

The first value, count, is our current state.
The second value, setCount , is the function that is used to update our state.
These names are variables that can be named anything you would like.
Lastly, we set the initial state to 0: useState(0)
which means initially value of count is 0,

summary from previous-
State
const [state, setState] = useState(initialValue);
Update state
setState(newValue);
Update using previous state
setState(previous => newValue);
String state
const [name, setName] = useState("");
Number state
const [count, setCount] = useState(0);
Boolean state
const [isOpen, setIsOpen] = useState(false);
Array state
const [items, setItems] = useState([]);
Object state
const [user, setUser] = useState({
    name: "",
    email: ""
});
Toggle
setIsOpen(previous => !previous);
Object update
setUser({
    ...user,
    name: "Tanya"
});
Array addition
setItems([
    ...items,
    newItem
]);
Array removal
setItems(
    items.filter(item => item.id !== id)
);

//Two-way binding-

Two-way data binding refers to a system where changes in the UI automatically update the state, and changes in the state automatically update the UI. This ensures that the user interface and the underlying data model remain synchronized in real time. While React primarily uses one-way data flow, two-way binding can be implemented manually using controlled components.

import React, { useState } from 'react';
function UserInput() {
  const [name, setName] = useState('');
  const handleChange = (event) => {
    setName(event.target.value); // Updates state when input changes
  };
  return (
    <input
      type="text"
      value={name}       // Input reflects state
      onChange={handleChange} // State updates on input change
    />
  );
}


2)-useEffect-

The useEffect Hook allows you to perform side effects in your components.
Some examples of side effects are: fetching data, directly updating the DOM, and timers.
useEffect lets you run some code after React renders your component.
useEffect accepts two arguments. The second argument is optional.
useEffect(<function>, <dependency>)


Why do we need useEffect()?
Suppose you write:

function App() {
    fetch("/api/hotels");
    return <h1>Hotels</h1>;
}

Looks simple.
But there's a problem.
A React component can render many times.
If the component renders 10 times:

Changes the document title according to count-

import { useState, useEffect } from "react";
function Counter() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `Count: ${count}`;
    });
    return (
        <button onClick={() => setCount(count + 1)}>
            {count}
        </button>
    );
}
When:
count = 0

browser title:
Count: 0

Click:
count = 1

title:
Count: 1

The three important forms
There are three patterns you must understand.

Form 1
No dependency array

useEffect(() => {
  console.log("Effect");
});

This runs after every render.


Form 2
Empty dependency array

useEffect(() => {
  console.log("Effect");
}, []);

run only on first render 

The empty array is important.
It means the effect has no reactive dependencies.


Form 3
Dependency array

useEffect(() => {
  console.log("Count changed");
}, [count]);

This means:
Run the effect after the initial render and when count changes.

Suppose:
count = 0

Initial:
Render
 ↓
Effect

Then:
count = 1
 ↓
Render
 ↓
Effect

Then:
count = 2
 ↓
Render
 ↓
Effect



Multiple dependencies

You can have:

useEffect(() => {
  console.log("Something changed");
}, [search, page]);

Now the effect can rerun when:

search changes
OR
page changes

Example hotel search:

useEffect(() => {
  fetchHotels(search, page);
}, [search, page]);

Conceptually:

search changed?
       ↓
fetch

page changed?
       ↓
fetch



Important development-mode note
If you use React's development StrictMode, you may sometimes see effects execute more than once during development.

For example:
<StrictMode>
  <App />
</StrictMode>

You might see:

Effect
Effect

and think:
"Why did React run it twice?"
In development, Strict Mode intentionally performs extra checks to help detect bugs.


Cleanup functions-
Now we reach another extremely important part.
An effect can return a function:

useEffect(() => {
  console.log("Effect started");
  return () => {
    console.log("Cleanup");
  };
}, []);
The returned function is called the cleanup function.

Why do we need cleanup?-
Some effects create something that needs to be stopped or removed.
Examples:

setInterval
event listener
subscription
websocket connection

For example:

useEffect(() => {
  const timer = setInterval(() => {
    console.log("Running...");
  }, 1000);
  return () => {
    clearInterval(timer);
  };
}, []);
Without cleanup, the interval could continue running after the component is removed.


*/