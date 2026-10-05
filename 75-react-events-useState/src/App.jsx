import Greeting from "./components/gretting";
import LikeButton from "./components/likebutton";
import { useState } from "react";
import Navbar from "./components/navbar";
import Profile from "./components/profile";
import SearchBox from "./components/searchbox";
import Favourite from "./components/favourite";
import Login from "./components/login";

function App(){
   function handleClick() {
        console.log("Button clicked");
    }

    function handleSubmit(event) {
        event.preventDefault();

        console.log("Form submitted");
    }

    function handleKeyDown(event) {

        if (event.key === "Enter") {
            console.log("Search!");
        }

    
    }
    
    
    
        
    return (
      <>
        <Greeting/>
        <Navbar/>
        <button onClick={handleClick}>
            Click Me
        </button>
        <form onSubmit={handleSubmit}>

            <input type="text" />

            <button type="submit">
                Submit
            </button>

        </form>
         <input
            type="text"
            placeholder="Search hotels..."
            onKeyDown={handleKeyDown}
        />
        <h1>insta clone</h1>
        <LikeButton/>
        <Profile/>
        
        <div className="hotelsearch">
            <SearchBox/>
        </div>

        <Favourite/>
        <Login/>
         
      </>
    );

}

export default App;


/*
LISTS IN JSX-

map()-

function HotelList() {

    const hotels = [
        "Grand Palace",
        "Royal Stay",
        "City Inn"
    ];

    return (
        <div>

            {hotels.map((hotel) => (
                <p>{hotel}</p>
            ))}

        </div>
    );
}

React renders:

Grand Palace
Royal Stay
City Inn
Why {}?

Because:

{hotels.map(...)}

is JavaScript being evaluated inside JSX.

Remember:

{}

means:


OBJECTS-

const hotels = [
    {
        id: 1,
        name: "Grand Palace",
        city: "Delhi",
        price: 4500,
        rating: 4.5
    },
    {
        id: 2,
        name: "Royal Stay",
        city: "Mumbai",
        price: 3800,
        rating: 4.3
    },
    {
        id: 3,
        name: "City Inn",
        city: "Lucknow",
        price: 2500,
        rating: 4.1
    }
];

Now:

{hotels.map((hotel) => (
    <div>
        <h2>{hotel.name}</h2>
        <p>{hotel.city}</p>
        <p>₹{hotel.price}</p>
        <p>⭐ {hotel.rating}</p>
    </div>
))}

But React gives a warning
You'll likely see something like:

Each child in a list should have a unique "key" prop.
That's because React needs a way to identify each item.
This brings us to keys.

What is a key?
A key is a unique identifier assigned to an item in a React list.
Example:

{hotels.map((hotel) => (
    <div key={hotel.id}>
        <h2>{hotel.name}</h2>
    </div>
))}

Here:
key={hotel.id}
is the key.
Keys help React identify which items are which.

Think of them as IDs.
Keys should be unique





EVENT-
currentTarget vs target

This is a useful concept.
Suppose:

<div onClick={handleClick}>
    <button>Login</button>
</div>

If you click the button:
event.target

is the:
button

But:
event.currentTarget

is the element where the handler is attached:
div
So:

target
   ↓
actual element clicked

currentTarget
   ↓
element whose event handler is currently running.



STATE-
State is data that belongs to a component and can change over time.

Example:

Counter = 0

Click button:
Counter = 1

Click again:
Counter = 2

This changing value is state,

For example, on a hotel website:

search text
selected city
number of guests
login status
whether a menu is open
selected hotel
booking status
cart items
favorite hotels

can all be state.

Think:

Component
   ↓
State
   ↓
UI

When state changes:

State changes
      ↓
React detects it
      ↓
Component renders again
      ↓
Updated UI


Why do we need State?

Consider a counter.

You want:
Count: 0

[ + ]

When the user clicks:
Count: 1

Click again:
Count: 2

The value is changing.

We need React to know:
"The data changed, so update the UI."

That's exactly what state does.

USESTATE-
useState()

It allows a component to have state.

Import it:
import { useState } from "react";

Then:
const [count, setCount] = useState(0);

count
   ↓
Current state value

setCount
   ↓
Function used to update state

useState(0)
   ↓
Initial state = 0

So:

useState(0)
means:
Start this state with the value 0.

Suppose:
count = 0

You click:
<button onClick={increase}>

React calls:
increase()

Inside:
setCount(count + 1);

Since:
count = 0

this becomes:
setCount(1);

React receives the update.

Then React renders the component again.

The new state is:
count = 1

Then JSX:
<h1>{count}</h1>

becomes:
<h1>1</h1>

State is component-specific
Suppose:

<Counter />
<Counter />

Each component has its own state.
Conceptually:

Counter 1
count = 5

Counter 2
count = 10

They don't automatically share state.

State Doesn't Mean the Whole Page Reloads

This is an important misconception.
When state changes, React does not normally reload the entire browser page.
Instead, React re-renders components and determines what UI needs updating.

State can hold strings
const [name, setName] = useState("");

Then:
setName("Tanya");

State can hold booleans
const [isOpen, setIsOpen] = useState(false);

Change:
setIsOpen(true);

Toggle:
setIsOpen(!isOpen);

Useful for:

Modal
Menu
Sidebar
Dark mode
Dropdown
Login state

State can hold arrays
const [hotels, setHotels] = useState([]);

Later:
setHotels([
    { id: 1, name: "Taj" },
    { id: 2, name: "Oberoi" }
]);

This is extremely important for API data.

 State can hold objects
const [user, setUser] = useState({
    name: "",
    email: ""
});

Then update carefully:

setUser({
    ...user,
    name: "Tanya"
});

The:
...user
is the JavaScript spread operator.

Never mutate state directly

Avoid:
user.name = "Tanya";

or:
hotels.push(newHotel);

Instead, create a new value.

For an array:
setHotels([
    ...hotels,
    newHotel
]);

For an object:
setUser({
    ...user,
    name: "Tanya"
});

Don't call the function immediately

Wrong:
<button onClick={handleClick()}>

This calls the function during rendering.

Correct:
<button onClick={handleClick}>


Conditional rendering

Suppose:
const isLoggedIn = true;

You want:

logged in → Dashboard
not logged in → Login

You can use:

{isLoggedIn ? (
    <Dashboard />
) : (
    <Login />
)}

Functional State Update

Instead:

setCount(prevCount => prevCount + 1);
setCount(prevCount => prevCount + 1);

Now React processes the updates using the latest previous state.

Conceptually:

Initial = 0

First update:
prevCount = 0
0 + 1 = 1

Second update:
prevCount = 1
1 + 1 = 2

🧠 Summary

You've now learned:

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
*/