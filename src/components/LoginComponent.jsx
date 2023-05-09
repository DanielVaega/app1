import React, { useState } from "react";

export const LoginComponent = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
    });

    const [errorMessage, setErrorMessage] = useState("");

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const { name, email, phone, address } = formData;
        // Check if email already exists in the database
        // (code for checking database goes here)
        // If email already exists, show error message to user
        // and prevent form submission
        if (emailExistsInDatabase(email)) {
            setErrorMessage("Email already exists in database");
        } else {
            // If email does not exist, submit form data as a JSON object
            const jsonData = {
                name: name,
                email: email,
                phone: phone,
                address: address,
            };
            console.log(jsonData); // Just for demonstration purposes
            setErrorMessage("");
        }
    };

    const emailExistsInDatabase = (email) => {
        // Check if email already exists in the database
        if (
            email === ""
        ) return false;
        // (code for checking database goes here)
        // Return true if email already exists, false otherwise
        return false; // Just for demonstration purposes
    };

    return (
        <>
            <form id="signin" className="sign-in" onSubmit={handleSubmit}>
                <label htmlFor="name">Full Name *</label>
                <br />
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                />
                <br />
                <label htmlFor="email">Email *</label>
                <br />
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                />
                <br />
                <label htmlFor="phone">Phone</label>
                <br />
                <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                />
                <br />
                <label htmlFor="address">Address</label>
                <br />
                <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                />
                <br />
                <button id="submitButton" type="submit">Submit</button>
            </form>
            {errorMessage && <p>{errorMessage}</p>}
        </>
    );
};