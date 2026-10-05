import { useState } from 'react'

function App() {
  
}

export default App


/*

useRef() is a React Hook that lets you store a value that can survive between renders without causing a re-render when that value changes.

The basic syntax is:
const myRef = useRef(initialValue);

For example:
const countRef = useRef(0);
React gives you an object like:

{current: 0
}

So you access the value using:
countRef.current


26. Why do we need useRef?
One common use:
Accessing a DOM element directly when necessary.

points to the actual input DOM element.

Then:

inputRef.current.focus();

calls the browser's DOM method.

28. useRef doesn't cause a re-render

This is one of the biggest differences between:

useState
useRef

If you do:

setCount(10);

React re-renders.

If you do:

ref.current = 10;

React does not automatically re-render.

29. useState vs useRef
useState	useRef
Stores changing UI data	Stores mutable values/DOM references
Updating causes render	Updating .current doesn't cause render
Used for UI state	Used for references/persistent mutable values
setValue()	ref.current = ...

Example:

const [count, setCount] = useState(0);

UI depends on count:

<h1>{count}</h1>

Use state.

But:

const inputRef = useRef(null);

is useful when you need to reference a DOM node.

30. useRef can store values too

For example:

const renderCount = useRef(0);

renderCount.current += 1;

The value persists across renders.

But changing:

renderCount.current

doesn't itself cause a render.

This can be useful for storing values that should persist but aren't themselves UI state.

31. Common uses of useRef

You'll encounter useRef for:

DOM access
Focus input
Scroll to element
Video/audio controls
Previous value tracking
Timers
Third-party libraries
Persistent mutable values

Example:

elementRef.current.scrollIntoView();
*/