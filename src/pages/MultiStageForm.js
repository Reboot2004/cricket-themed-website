// src/pages/MultiStageRegistration.js
import React, { useState } from 'react';
import { FaAdn, FaUser, FaEnvelope, FaPhone, FaTrophy } from 'react-icons/fa';

const MultiStageRegistration = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: 'player',
        phone: '',
        event: '',
        position: '',
        experience: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleNext = () => {
        setCurrentStep((prevStep) => prevStep + 1);
    };

    const handleBack = () => {
        setCurrentStep((prevStep) => prevStep - 1);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Registration successful!');
            } else {
                alert('There was a problem with the registration.');
            }
        } catch (error) {
            console.error('Error during registration:', error);
        }
    };

    return (
        <div className="container mx-auto p-6 bg-green-100 min-h-screen">
            <h1 className="text-4xl font-bold mb-6 text-center text-green-700">
                <FaAdn className="inline-block mb-2" /> Cricket Event Registration
            </h1>

            <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white shadow-lg p-6 rounded-lg">
                {currentStep === 1 && (
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-green-600">Step 1: Basic Information</h2>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                                <FaUser className="inline-block mr-2" /> Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded-md"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                                <FaEnvelope className="inline-block mr-2" /> Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded-md"
                                required
                            />
                        </div>
                        <button
                            type="button"
                            onClick={handleNext}
                            className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-md"
                        >
                            Next
                        </button>
                    </div>
                )}

                {currentStep === 2 && (
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-green-600">Step 2: Role Information</h2>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="role">
                                Register as
                            </label>
                            <select
                                id="role"
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded-md"
                                required
                            >
                                <option value="player">Player</option>
                                <option value="coach">Coach</option>
                            </select>
                        </div>

                        {formData.role === 'player' && (
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="position">
                                    Preferred Position
                                </label>
                                <select
                                    id="position"
                                    name="position"
                                    value={formData.position}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded-md"
                                    required
                                >
                                    <option value="">Select Position</option>
                                    <option value="batsman">Batsman</option>
                                    <option value="bowler">Bowler</option>
                                    <option value="all-rounder">All-Rounder</option>
                                    <option value="wicket-keeper">Wicket Keeper</option>
                                </select>
                            </div>
                        )}

                        {formData.role === 'coach' && (
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="experience">
                                    Years of Experience
                                </label>
                                <input
                                    type="number"
                                    id="experience"
                                    name="experience"
                                    value={formData.experience}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded-md"
                                    required
                                />
                            </div>
                        )}

                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
                                <FaPhone className="inline-block mr-2" /> Phone Number
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded-md"
                                required
                            />
                        </div>

                        <div className="flex justify-between">
                            <button
                                type="button"
                                onClick={handleBack}
                                className="bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded-md"
                            >
                                Back
                            </button>
                            <button
                                type="button"
                                onClick={handleNext}
                                className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-md"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                )}

                {currentStep === 3 && (
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-green-600">Step 3: Event Information</h2>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="event">
                                <FaTrophy className="inline-block mr-2" /> Event Name
                            </label>
                            <input
                                type="text"
                                id="event"
                                name="event"
                                value={formData.event}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded-md"
                                placeholder="e.g., Cricket Championship 2024"
                                required
                            />
                        </div>

                        <div className="flex justify-between">
                            <button
                                type="button"
                                onClick={handleBack}
                                className="bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded-md"
                            >
                                Back
                            </button>
                            <button
                                type="submit"
                                className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-md"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                )}
            </form>
        </div>
    );
};

export default MultiStageRegistration;
