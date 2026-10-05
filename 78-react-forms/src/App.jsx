import { useState } from 'react'
import Formm from './components/form';
import BookingForm from './components/bookingform';
function App(){
    //NAME-
    const [name, setName] = useState("");
    //EMAIL-
    const [email, setEmail] = useState("");
    //Password-
    const [pass, setpass] = useState("");
    //textarea
    const [message, setMessage] = useState("");
    //dropdown
     const [dropdown, setdropdown] = useState("");
    //checkbox
    const [breakfast, setBreakfast] = useState(false);
    const [lunch, setlunch] = useState(false);
    //radio button
    const [paymentMethod, setPaymentMethod] = useState("");
    return (
        <div>

            <h2>Enter Your Name</h2>

            <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Enter your name"
            />

            <p>Your name is: {name}</p>
          
            <h2>Enter Your Email</h2>

            <input
                type="text"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter your name"
            />

            <h2>Enter Your Password</h2>

            <input
                type="text"
                value={pass}
                onChange={(event) => setpass(event.target.value)}
                placeholder="Enter your name"
            />
            
            <textarea value={message} onChange={(event) => setMessage(event.target.value)}/>

            <select
                name="dropdown"
                value={dropdown}
                onChange={(event) => setMessage(event.target.value)}>
                <option value="">Select room</option>
                <option value="standard">Standard Room</option>
                <option value="deluxe">Deluxe Room</option>
                <option value="suite">Suite</option>
            </select>

            <label><input type="checkbox" checked={breakfast} onChange={(event) =>
            setBreakfast(event.target.checked)}/>breakfast</label>
            <label><input type="checkbox" checked={lunch} onChange={(event) =>
            setlunch(event.target.checked)}/>lunch</label>
            <label>
                <input
                type="radio"
                name="paymentMethod"
                value="cash"
                checked={paymentMethod === "cash"}
                onChange={(event) =>
                    setPaymentMethod(event.target.value)
                }
                />
            Cash
            </label>
            <label>
                <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={paymentMethod === "card"}
                    onChange={(event) =>
                        setPaymentMethod(event.target.value)
                    }
                />
                Card
            </label>
            <label>
                <input
                    type="radio"
                    name="paymentMethod"
                    value="upi"
                    checked={paymentMethod === "upi"}
                    onChange={(event) =>
                        setPaymentMethod(event.target.value)
                    }
                />
            UPI
            </label>
            <Formm/>
            <BookingForm/>
        </div>
    );

}

export default App;

/*
React can control and manage the form's data using state.
This is called a controlled form.

In a controlled component, form data is handled by the React component.
The value of the input element is driven by the React state, and any changes to that value are managed through event handlers that update the state.
When the data is handled by the components, all the data is stored in the component state.

//form validation
We need to make sure the data is valid.

For example:

Name: ""
Email: "hello"
Password: "12"

We shouldn't allow submission.
Validation means:
Checking whether the user's input satisfies the required rules.

Imagine Stayora registration:

Name
Email
Password
Confirm Password

Rules could be:

Name → required
Email → valid format
Password → minimum 8 characters
Confirm Password → must match password

Without validation, bad data can reach your backend.

*/