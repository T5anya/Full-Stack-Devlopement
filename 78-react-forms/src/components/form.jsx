import { useState } from "react";

function Formm(){
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        acceptedTerms: false,
        breakfast:false,
        lunch:false
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((previous) => ({
        ...previous,
        [name]: type === "checkbox" ? checked : value
    }));
    };
    
     const validateForm = () => {

        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!emailPattern.test(formData.email)) {
            newErrors.email = "Enter a valid email";
        }

        if (!formData.password) {
            newErrors.password = "Password is required";
        }else if (formData.password.length < 8) {
            newErrors.password =
                "Password must be at least 8 characters";
        }

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword =
                "Passwords do not match";
        }
        if (!formData.acceptedTerms) {
            newErrors.acceptedTerms =
            "You must accept the terms";
        }

        return newErrors;
    };

    const handleSubmit = (event) => {

        event.preventDefault();

        const validationErrors = validateForm();

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) {
            return;
        }

        console.log("Registration successful");
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit}>

            <h2>Create Account</h2>

            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full name"
            />

            {errors.name && (
                <p>{errors.name}</p>
            )}

            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
            />

            {errors.email && (
                <p>{errors.email}</p>
            )}

            <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
            />

            {errors.password && (
                <p>{errors.password}</p>
            )}

            <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
            />

            {errors.confirmPassword && (
                <p>{errors.confirmPassword}</p>
            )}
            <label>
                <input
                    type="checkbox"
                    name="breakfast"
                    checked={formData.breakfast}
                    onChange={handleChange}
                />

                breakfast
            </label>

            <label>
                <input
                           type="checkbox"
                    name="lunch"
                    checked={formData.lunch}
                    onChange={handleChange}
                />

                lunch
            </label>

            <input
                type="checkbox"
                name="acceptedTerms"
                checked={formData.acceptedTerms}
                onChange={handleChange}
            />


            <button type="submit">
                Create Account
            </button>

        </form>
    );

            
        
}

export default Formm;