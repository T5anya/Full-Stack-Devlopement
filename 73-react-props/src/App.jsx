
import User,{HotelCard} from "./components/user.jsx"



function App() {
    return (
        <>
            <User name="Tanya" />
            <User name="Rahul" />
            <User name="Ananya" />
            <div className="parent">
              <div>
                <HotelCard 
                  img="https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  name="The Grand Palace"
                  city="Delhi"
                  price={4500}
                  rating={4.5}
                />
              </div>
              <div>
                <HotelCard
                  img="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  name="The Grand Palace"
                  city="lucknow"
                  price={2500}
                  rating={4}
                />
              </div>
            </div>
        </>
    );
}


export default App;


/*
Components become really powerful when we can send data to them.
This is where props come in.
Props = properties

Props are arguments passed into React components.
Props are passed to components via HTML attributes.
props stands for properties

Think of props as information passed from a parent component to a child component.

Props can contain different data types-

String
name="Stayora"

Number
price={4500}

Boolean
available={true}

Array
amenities={["WiFi", "Pool", "Breakfast"]}

Object
location={{
    city: "Delhi",
    country: "India"
}}

Function
Yes — you can even pass functions.
We'll use this heavily for component communication.

Props destructuring

Instead of:
function HotelCard(props) {
    return (
        <h2>{props.name}</h2>
    );
}

you can destructure:
function HotelCard({ name, price, city }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>{city}</p>
            <p>₹{price}</p>
        </div>
    );
}

This is cleaner.

children prop

There's another special prop:
children
Example:

<Card>
    <h2>Grand Palace</h2>
    <p>Delhi</p>
</Card>

The content inside <Card> becomes:
props.children

Component:

function Card({ children }) {
    return (
        <div className="card">
            {children}
        </div>
    );
}
This is extremely useful for reusable UI components.

Props are read-only
This is a very important React rule.

Suppose:

function HotelCard({ price }) {

You should not do:
price = 1000;
A child shouldn't directly modify its props.


Passing objects

Suppose:
const hotel = {
    name: "Grand Palace",
    city: "Delhi",
    price: 4500,
    rating: 4.5
};

Send it:
<HotelCard hotel={hotel} />

Receive:
function HotelCard({ hotel }) {
    return (
        <div>
            <h2>{hotel.name}</h2>
            <p>{hotel.city}</p>
            <p>₹{hotel.price}</p>
            <p>⭐ {hotel.rating}</p>
        </div>
    );
}


Passing arrays

const hotels = [
    {
        name: "Grand Palace",
        price: 4500
    },
    {
        name: "Royal Stay",
        price: 3200
    },
    {
        name: "City Inn",
        price: 2200
    }
];

Pass:
<HotelList hotels={hotels} />

Later, we'll use .map() to create multiple HotelCards.

For example:
function HotelList({ hotels }) {
    return (
        <div>
            {hotels.map((hotel) => (
                <HotelCard
                    key={hotel.name}
                    hotel={hotel}
                />
            ))}
        </div>
    );
}

We'll cover lists and keys in depth later.

Passing functions as props
This is extremely important.

Parent:
function App() {
    function handleBooking() {
        console.log("Booking clicked");
    }
    return (
        <HotelCard
            onBook={handleBooking}
        />
    );
}

Child:
function HotelCard({ onBook }) {

    return (
        <button onClick={onBook}>
            Book Now
        </button>
    );
}

Flow:
App
 │
 │ handleBooking function
 ↓
HotelCard
 │
 │ user clicks button
 ↓
handleBooking()

This allows a child to trigger behavior defined by its parent.


*/