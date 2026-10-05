import { useState } from "react";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(event) {

        event.preventDefault();

        console.log(email);
        console.log(password);
    }

    return (
        <form onSubmit={handleSubmit}>

            <input
                type="email"
                value={email}
                onChange={(event) =>
                    setEmail(event.target.value)
                }
                placeholder="Email"
            />

            <input
                type="password"
                value={password}
                onChange={(event) =>
                    setPassword(event.target.value)
                }
                placeholder="Password"
            />

            <button type="submit">
                Login
            </button>

        </form>
    );
}

export default Login;