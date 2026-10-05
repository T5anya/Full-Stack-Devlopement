function Hotelcard({hotel}){
     return (
        <div className="card">
            <img className="imag" src={hotel.image} alt="image" />
            <h2 className="name">{hotel.name}</h2>
            <p className="loc">{hotel.location}</p>
            <p className="price">₹{hotel.price}</p>
            <p className="rate">{hotel.rating}</p>
            <button className="Explore">explore</button>
        </div>
    );
}

export default Hotelcard;
