// src/components/MultiStageForm.js
import React, { useState } from 'react';
import './MultiStageForm.css'; // Assuming the CSS has background styling and form layout

const MultiStageForm = ({ eventId, role }) => {
    const [stage, setStage] = useState(1); // Current form stage
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        teamName: '',
        role: role || 'player', // Default to player if not passed from the parent component
        eventId: eventId, // Passed from the event
        position: '', // Player's position if the role is player
        experience: '' // Experience level if the role is coach
    });

    const [errors, setErrors] = useState({}); // State for form validation errors

    // Function to handle form data change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Function to validate current form stage
    const validateStage = () => {
        const newErrors = {};
        if (stage === 1) {
            if (!formData.name) newErrors.name = 'Name is required';
            if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required';
            if (!formData.phone || !/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Valid 10-digit phone number is required';
        } else if (stage === 2 && formData.role === 'player') {
            if (!formData.teamName) newErrors.teamName = 'Team Name is required';
            if (!formData.position) newErrors.position = 'Position is required for players';
        } else if (stage === 2 && formData.role === 'coach') {
            if (!formData.teamName) newErrors.teamName = 'Team Name is required';
            if (!formData.experience) newErrors.experience = 'Experience is required for coaches';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Return true if no errors
    };

    // Function to go to the next stage
    const nextStage = () => {
        if (validateStage()) setStage(stage + 1);
    };

    // Function to go to the previous stage
    const prevStage = () => {
        setErrors({}); // Clear errors when going back
        setStage(stage - 1);
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateStage()) {
            console.log('Submitting form data: ', formData);
            // Add form submission logic here (e.g., API call)
        }
    };

    return (
        <div className="multi-stage-form bg-image"> {/* Background image covers entire screen */}
            <h2 className="text-2xl font-bold mb-6 text-white">Register for the Event</h2>
            <div className="progress-bar mb-4">
                <span className="text-white">Step {stage} of 3</span>
            </div>

            <form onSubmit={handleSubmit} className="form-container">
                {stage === 1 && (
                    <div className="stage">
                        <h3 className="text-white">Step 1: Personal Details</h3>
                        <div className="mb-4">
                            <label className="block mb-2 text-white">Name:</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="input"
                                required
                            />
                            {errors.name && <p className="error-text">{errors.name}</p>}
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 text-white">Email:</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="input"
                                required
                            />
                            {errors.email && <p className="error-text">{errors.email}</p>}
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 text-white">Phone:</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="input"
                                required
                            />
                            {errors.phone && <p className="error-text">{errors.phone}</p>}
                        </div>
                        <button type="button" onClick={nextStage} className="btn-next">
                            Next
                        </button>
                    </div>
                )}

                {stage === 2 && (
                    <div className="stage">
                        <h3 className="text-white">Step 2: Team Details</h3>
                        <div className="mb-4">
                            <label className="block mb-2 text-white">Team Name:</label>
                            <input
                                type="text"
                                name="teamName"
                                value={formData.teamName}
                                onChange={handleInputChange}
                                className="input"
                                required
                            />
                            {errors.teamName && <p className="error-text">{errors.teamName}</p>}
                        </div>
                        {formData.role === 'player' ? (
                            <div className="mb-4">
                                <label className="block mb-2 text-white">Position:</label>
                                <input
                                    type="text"
                                    name="position"
                                    value={formData.position}
                                    onChange={handleInputChange}
                                    className="input"
                                    required
                                />
                                {errors.position && <p className="error-text">{errors.position}</p>}
                            </div>
                        ) : (
                            <div className="mb-4">
                                <label className="block mb-2 text-white">Experience (years):</label>
                                <input
                                    type="text"
                                    name="experience"
                                    value={formData.experience}
                                    onChange={handleInputChange}
                                    className="input"
                                    required
                                />
                                {errors.experience && <p className="error-text">{errors.experience}</p>}
                            </div>
                        )}
                        <div className="flex justify-between">
                            <button type="button" onClick={prevStage} className="btn-back">
                                Back
                            </button>
                            <button type="button" onClick={nextStage} className="btn-next">
                                Next
                            </button>
                        </div>
                    </div>
                )}

                {stage === 3 && (
                    <div className="stage">
                        <h3 className="text-white">Step 3: Confirm Details</h3>
                        <p className="text-white"><strong>Name:</strong> {formData.name}</p>
                        <p className="text-white"><strong>Email:</strong> {formData.email}</p>
                        <p className="text-white"><strong>Phone:</strong> {formData.phone}</p>
                        <p className="text-white"><strong>Team Name:</strong> {formData.teamName}</p>
                        <p className="text-white"><strong>Role:</strong> {formData.role}</p>
                        {formData.role === 'player' ? (
                            <p className="text-white"><strong>Position:</strong> {formData.position}</p>
                        ) : (
                            <p className="text-white"><strong>Experience:</strong> {formData.experience} years</p>
                        )}
                        <div className="flex justify-between">
                            <button type="button" onClick={prevStage} className="btn-back">
                                Back
                            </button>
                            <button type="submit" className="btn-submit">
                                Submit
                            </button>
                        </div>
                    </div>
                )}
            </form>
        </div>
    );
};

export default MultiStageForm;
