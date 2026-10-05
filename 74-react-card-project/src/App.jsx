import Hotelcard from "./components/Hotelcard";
import Navbar from "./components/Navbar";

function App(){
 
  const hotels = [
  {
    id: 1,
    name: "The Grand Palace",
    location: "New Delhi, India",
    price: 4500,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945"
  },
  {
    id: 2,
    name: "Taj Lakefront",
    location: "Bhopal, India",
    price: 5200,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d"
  },
  {
    id: 3,
    name: "Royal Orchid Hotel",
    location: "Bangalore, India",
    price: 3800,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa"
  },
  {
    id: 4,
    name: "The Oberoi Grand",
    location: "Kolkata, India",
    price: 6500,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791"
  },
  {
    id: 5,
    name: "Marriott Suites",
    location: "Mumbai, India",
    price: 7200,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a"
  },
  {
    id: 6,
    name: "Hyatt Regency",
    location: "Gurgaon, India",
    price: 5800,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb"
  },
  {
    id: 7,
    name: "Riverside Retreat",
    location: "Rishikesh, India",
    price: 3200,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7"
  },
  {
    id: 8,
    name: "The Heritage Inn",
    location: "Jaipur, India",
    price: 4100,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427"
  },
  {
    id: 9,
    name: "Ocean Pearl Resort",
    location: "Goa, India",
    price: 6000,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b"
  },
  {
    id: 10,
    name: "Mountain View Resort",
    location: "Manali, India",
    price: 3500,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1544986581-efac024faf62"
  }
];

 return(
  <div className="conatiner">
    <Navbar/>
    <div className="parent">
      {
        hotels.map((hotel)=>(
          <Hotelcard 
          key={hotel.id}
          hotel={hotel}
          />
        ))
      }
    </div>
  </div>
 )
}

export default App