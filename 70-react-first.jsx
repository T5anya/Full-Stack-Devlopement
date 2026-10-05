/* What exactly is React?

React is a JavaScript library for building user interfaces.

It was created by Facebook (now Meta).

The simplest way to think about it:

React lets you build a website from reusable UI components that automatically update when your data changes. 

React is NOT a programming language It is a Javascript Library 

One of React's most common uses is building Single Page Applications, or SPAs.

JSX=js XML
html +javascript*/


var h=<h1>helloo</h1>



/* What is a React component?

This is one of the most important concepts in React.

A component is a reusable piece of UI.

Example:

function Welcome() {
    return <h1>Welcome</h1>;
}

Welcome is a component.

You can use it:

function App() {
    return (
        <div>
            <Welcome />
            <Welcome />
            <Welcome />
        </div>
    ); 
    
  What is a component?

A component is essentially a reusable piece of UI.

Example:

function Welcome() {
    return <h1>Hello Tanya!</h1>;
}

You can use it:

<Welcome />

You could even use it multiple times:

function App() {
    return (
        <>
            <Welcome />
            <Welcome />
            <Welcome />
        </>
    );
}  
  
JavaScript inside JSX

You can put JavaScript expressions inside {}.

Example:

function App() {

    const name = "Tanya";
    const age = 20;

    return (
        <div>
            <h1>{name}</h1>
            <p>Age: {age}</p>
        </div>
    );
}

You can also calculate:

<p>{10 + 20}</p>

Output:

30

Or:

<p>{name.toUpperCase()}</p>

JSX must have one parent

This is incorrect:

function App() {
    return (
        <h1>Hello</h1>
        <p>Welcome</p>
    );
}

You need a parent:

function App() {
    return (
        <div>
            <h1>Hello</h1>
            <p>Welcome</p>
        </div>
    );
}

Or a React Fragment:

function App() {
    return (
        <>
            <h1>Hello</h1>
            <p>Welcome</p>
        </>
    );
}

JSX expressions

You can put JavaScript expressions inside:

{ }

Example:

function App() {
    const name = "Tanya";

    return <h1>Hello {name}</h1>;
}

Output:

Hello Tanya

*/