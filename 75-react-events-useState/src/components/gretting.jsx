import { useState } from "react";
    function Greeting() {

    const [name, setName] = useState("Tanya");

    function changeName() {
        setName("Alex");
    }
    return (
        <>
            <h1>Hello {name}</h1>

            <button onClick={changeName}>
                Change Name
            </button>
        </>
    )

    };

export default Greeting;