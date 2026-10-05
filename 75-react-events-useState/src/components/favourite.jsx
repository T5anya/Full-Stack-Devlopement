import { useState } from "react";

function Favourite() {

    const [isFavorite, setIsFavorite] = useState(false);

    function toggleFavorite() {
        setIsFavorite(previous => !previous);
    }

    return (
        <div>

            <h2>Grand Palace</h2>

            <button onClick={toggleFavorite}>
                {isFavorite ? "❤️ Favorited" : "♡ Add to Favorites"}
            </button>

        </div>
    );
}

export default Favourite;