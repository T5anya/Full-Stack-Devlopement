function User(props) {
    return <h2>{props.name}</h2>;
}

function HotelCard(props) {
    return (
        <div className="card">
            <img className="im" src={props.img} alt="profile-img"/>
            <h2>{props.name}</h2>
            <p>{props.city}</p>
            <p>₹{props.price}</p>
            <p>⭐ {props.rating}</p>
        </div>
    );
}


export default User;
export {HotelCard};