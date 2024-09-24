// src/pages/Home.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarAlt } from 'react-icons/fa';
import './Home.css'; // Import your CSS file for custom styles

const Home = () => {
    // State to track hovered event details
    const [hoveredEvent, setHoveredEvent] = useState(null);
    const [sidebarVisible, setSidebarVisible] = useState(false);

    // Mock events for the calendar
    const events = [
        { id: 1, title: "Cricket Championship 2024", date: "2024-03-10", location: "XYZ Stadium", prize: "$50,000", players: "10 teams", description: "A highly anticipated event in the cricket world!", image: "https://via.placeholder.com/300x200?text=Cricket+Championship" },
        { id: 2, title: "Junior Cricket League", date: "2024-04-05", location: "ABC Grounds", prize: "$20,000", players: "8 teams", description: "A fantastic event for up-and-coming players.", image: "https://via.placeholder.com/300x200?text=Junior+Cricket+League" },
        // Add more events as needed
    ];

    return (
        <div className="home-container">
            {/* Floating Icon for Sidebar */}
            <div
                className="floating-icon"
                onMouseEnter={() => setSidebarVisible(true)}
                onMouseLeave={() => setSidebarVisible(false)}
            >
                <FaCalendarAlt size={30} />
            </div>

            {/* Sidebar showing on hover */}
            {sidebarVisible && (
                <div
                    className="hover-sidebar"
                    onMouseEnter={() => setSidebarVisible(true)}
                    onMouseLeave={() => setSidebarVisible(false)}
                >
                    <h2 className="text-xl font-bold mb-4">Events</h2>
                    <div>
                        {events.map(event => (
                            <div
                                key={event.id}
                                onMouseEnter={() => setHoveredEvent(event)}
                                onMouseLeave={() => setHoveredEvent(null)}
                                className="event-item"
                            >
                                <h3 className="text-md font-semibold">{event.title}</h3>
                                <p className="text-sm">{event.date}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Event Details Popup */}
            {hoveredEvent && (
                <div
                    className="hover-popup"
                    onMouseEnter={() => setHoveredEvent(hoveredEvent)}
                    onMouseLeave={() => setHoveredEvent(null)}
                >
                    <img src={hoveredEvent.image} alt={hoveredEvent.title} className="w-full h-24 object-cover rounded-lg mb-2" />
                    <h3 className="text-md font-semibold">{hoveredEvent.title}</h3>
                    <p>Date: {hoveredEvent.date}</p>
                    <p>Location: {hoveredEvent.location}</p>
                    <p>Prize: {hoveredEvent.prize}</p>
                    <div className="mt-2">
                        <Link to={`/register/${hoveredEvent.id}?role=player`} className="mr-2 bg-green-500 text-white px-2 py-1 rounded-md inline-block hover:bg-green-600">Player</Link>
                        <Link to={`/register/${hoveredEvent.id}?role=coach`} className="bg-blue-500 text-white px-2 py-1 rounded-md inline-block hover:bg-blue-600">Coach</Link>
                    </div>
                </div>
            )}

            {/* Main Content */}
            <div className="main-content">
                <div className="hero-section">
                    <div className="overlay">
                        <div className="relative z-10 text-white text-center py-32">
                            <h1 className="text-5xl font-bold">Welcome to XYZ Cricket Tournaments</h1>
                            <p className="mt-4 text-lg">Join us for exciting cricket matches and tournaments!</p>
                            <Link to="/register" className="mt-6 inline-block bg-yellow-500 text-black px-6 py-2 rounded-md hover:bg-yellow-600 transition-colors">Register Now</Link>
                        </div>
                    </div>
                </div>

                {/* Upcoming Tournaments Section */}
                <div className="py-12 bg-gray-100">
                    <h2 className="text-3xl font-bold text-center">Upcoming Tournaments</h2>
                    <div className="flex flex-wrap justify-center mt-8">
                        {events.map(event => (
                            <div key={event.id} className="bg-white shadow-lg rounded-lg p-6 mx-4 my-4 max-w-xs">
                                <img src={event.image} alt={event.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                                <h3 className="text-xl font-semibold">{event.title}</h3>
                                <p className="mt-2">Date: {event.date}</p>
                                <p>Location: {event.location}</p>
                                <p>Prize: {event.prize}</p>
                                <Link to={`/event/${event.id}`} className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md block text-center hover:bg-green-600">View Details</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
