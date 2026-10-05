import React from "react";
import Card from "./components/card.jsx";
import Navbar from "./components/navbar.jsx";
function App(){
  const name="harsh";
  return(
    <div>
      <Navbar/>
      <Card/>
      <Card/>
      {Card()}
    </div>
  )
}

export default App

/*
JSX Rule #1 — One Parent Element
JSX Rule #2 — Close Every Tag

HTML sometimes allows:
<img>

In JSX, write:
<img src="photo.jpg" />

Similarly:
<input />
<br />

JSX Rule #3 — JavaScript Goes Inside {}

Suppose:
const name = "Tanya";

You can display it:
<h1>Hello {name}</h1>

Expressions Inside Attributes
You can also use JavaScript inside attributes.

Example:
function App() {
    const imageUrl = "https://example.com/photo.jpg";
    return (
        <img src={imageUrl} />
    );
}
*/