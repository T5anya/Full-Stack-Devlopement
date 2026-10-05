import { useState } from "react";

function SearchBox() {

    const [city, setCity] = useState("");

    return (
        <div>

            <input
                value={city}
                onChange={(event) => {
                    setCity(event.target.value);
                }}
                placeholder="Enter city"
            />

            <p>You searched for: {city}</p>

        </div>
    );
}

export default SearchBox;