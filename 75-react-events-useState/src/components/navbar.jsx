import { useState } from "react";

function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }
    return(
        <>
            <nav>

                <h2>Stayora</h2>

                <button onClick={toggleMenu}>
                    Menu
                </button>

                {isMenuOpen && (
                    <div>
                        <a href="/">Home</a>
                        <a href="/hotels">Hotels</a>
                        <a href="/contact">Contact</a>
                    </div>
                )}

            </nav>
        </>
    );
    };

    export default Navbar;
