// src/components/EventCalendar.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const events = [
    {
        id: 1,
        name: 'Cricket Tournament - Summer Cup',
        date: new Date(2024, 8, 30), // Month is 0-indexed (September)
        prize: '₹50,000',
        players: ['Player A', 'Player B', 'Player C'],
        details: 'Join us for the exciting Summer Cup! Teams from across the region will compete.',
    },
    {
        id: 2,
        name: 'Cricket Championship - Winter Series',
        date: new Date(2024, 9, 15), // October
        prize: '₹75,000',
        players: ['Player D', 'Player E', 'Player F'],
        details: 'A prestigious championship held during the winter season.',
    },
    {
        id: 3,
        name: 'Cricket Charity Match',
        date: new Date(2024, 10, 1), // November
        prize: 'All proceeds go to charity',
        players: ['Player G', 'Player H', 'Player I'],
        details: 'A charity match to support local initiatives.',
    },
];

const EventCalendar = () => {
    const [value, setValue] = useState(new Date());
    const [hoveredEvent, setHoveredEvent] = useState(null);

    const handleDateChange = (date) => {
        setValue(date);
    };

    const handleMouseEnter = (event) => {
        setHoveredEvent(event);
    };

    const handleMouseLeave = () => {
        setHoveredEvent(null);
    };

    return (
        <div className="p-4 bg-white rounded shadow-md">
            <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
            <Calendar
                onChange={handleDateChange}
                value={value}
                tileContent={({ date }) => {
                    const event = events.find((event) => event.date.toDateString() === date.toDateString());
                    return event ? (
                        <div className="bg-blue-600 text-white p-1 rounded">
                            {event.name}
                        </div>
                    ) : null;
                }}
            />
            {hoveredEvent && (
                <div className="absolute bg-white border rounded shadow-lg p-4 mt-2">
                    <h3 className="font-bold">{hoveredEvent.name}</h3>
                    <p><strong>Date:</strong> {hoveredEvent.date.toDateString()}</p>
                    <p><strong>Prize:</strong> {hoveredEvent.prize}</p>
                    <p><strong>Players:</strong> {hoveredEvent.players.join(', ')}</p>
                    <p>{hoveredEvent.details}</p>
                </div>
            )}
        </div>
    );
};

export default EventCalendar;
