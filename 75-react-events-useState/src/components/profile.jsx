import { useState } from "react";

function Profile() {

    const [name, setName] = useState("Tanya");

    const [age, setAge] = useState(20);

    const [isOnline, setIsOnline] = useState(true);
    
    const [user, setUser] = useState({
    name: "Tanya",
    email: "tanya#juysddj",
    age:"20",
    city:"Lucknow"
    });

    const [city,setcities]=useState(["lucknow"]);
    function changecity(){
        setcities([...city,"delhi"]);
    }

    const [items, setItems] = useState([]);
    function additems(){setItems(prevItems => [
        ...prevItems,
        "Apple",
        "banana",
        "orange",
        "tia"
        ]);
    }

    //to remove mango-
    //setItems(prevItems =>
    //prevItems.filter(item => item !== "Mango"));

    const hotels = [
    { id: 1, name: "Grand Palace", price: 4000 },
    { id: 2, name: "Royal Stay", price: 3000 }
    ];
    const [hotel, sethotels] = useState(hotels);
    function hotes(){
        sethotels(
            hotels.map(hotel =>
            hotel.id === 2
                ? { ...hotel, price: 3500 }
                : hotel
        )
    );
    }
    return(
        <>
            <h1>{name}</h1>
            <p>Age: {age}</p>
            <p>Online: {isOnline ? "Yes" : "No"}</p>
            <p>User : {user.name}</p>
            <p>User Age : {user.age}</p>
            
           <button onClick={changecity}>
            change city
           </button>
            <p>User city : {user.city}</p>
            {city.map((city,index)=>(
                <p key={index}>
                    user city:{
                        city
                    }
                </p>
            ))}
            <button onClick={additems}>
            items
           </button>
            <p>Items</p>
            {items.map((items,index)=>(
                <p key={index}>
                    item:{items}
                </p>
            ))}
            <button onClick={hotes}>
            hotels
           </button>
            <p>hotels</p>
            {hotel.map((hotel)=>(
                <p key={hotel.id}>
                    hotel.name={hotel.name}
                    hotel-price={hotel.price}
                </p>
            ))}

        </>
    );
}
  
export default Profile;