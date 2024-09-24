// src/pages/events/EventDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

const eventDetails = {
    1: {
        name: 'Cricket Tournament - Summer Cup',
        prize: '₹50,000',
        date: '2024-09-30',
        players: ['Player A', 'Player B', 'Player C'],
        details: 'Join us for the exciting Summer Cup! Teams from across the region will compete.',
    },
    2: {
        name: 'Cricket Championship - Winter Series',
        prize: '₹75,000',
        date: '2024-10-15',
        players: ['Player D', 'Player E', 'Player F'],
        details: 'A prestigious championship held during the winter season.',
    },
    3: {
        name: 'Cricket Charity Match',
        prize: 'All proceeds go to charity',
        date: '2024-11-01',
        players: ['Player G', 'Player H', 'Player I'],
        details: 'A charity match to support local initiatives.',
    },
};

const EventDetail = () => {
    const { id } = useParams();
    const event = eventDetails[id];

    if (!event) return <div>Event not found!</div>;

    return (
        <div className="p-4 bg-white rounded shadow-md">
            <h2 className="text-2xl font-bold">{event.name}</h2>
            <p className="mt-2"><strong>Date:</strong> {event.date}</p>
            <p className="mt-2"><strong>Prize Money:</strong> {event.prize}</p>
            <p className="mt-2"><strong>Players:</strong> {event.players.join(', ')}</p>
            <p className="mt-2">{event.details}</p>
        </div>
    );
};

export default EventDetail;
