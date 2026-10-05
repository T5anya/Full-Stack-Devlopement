import { useState } from "react";

function BookingForm() {
    const [formData, setFormData] = useState({
        guestName: "",
        email: "",
        roomType: "",
        guests: 1,
        breakfast: false
    });

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;

        setFormData((previous) => ({
            ...previous,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit}>

            <input
                type="text"
                name="guestName"
                value={formData.guestName}
                onChange={handleChange}
                placeholder="Guest name"
            />

            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
            />

            <select
                name="roomType"
                value={formData.roomType}
                onChange={handleChange}
            >
                <option value="" disabled >Choose room</option>
                <option value="standard">Standard</option>
                <option value="deluxe">Deluxe</option>
                <option value="suite">Suite</option>
            </select>

            <input
                type="number"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                min="1"
            />

            <label>
                <input
                    type="checkbox"
                    name="breakfast"
                    checked={formData.breakfast}
                    onChange={handleChange}
                />

                Include breakfast
            </label>

            <button type="submit">
                Book Now
            </button>

        </form>
    );
}

export default BookingForm;