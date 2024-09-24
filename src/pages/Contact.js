// src/pages/Contact.js
import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here (e.g., send to server)
        console.log('Contact Form Data:', formData);
    };

    return (
        <div className="py-12">
            <h1 className="text-4xl font-bold text-center">Contact Us</h1>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-6">
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="message">Message</label>
                    <textarea
                        name="message"
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                        required
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Send</button>
            </form>
        </div>
    );
};

export default Contact;
