// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between">
                <h1 className="text-white text-2xl">XYZ Cricket</h1>
                <ul className="flex space-x-4">
                    <li><Link to="/" className="text-white">Home</Link></li>
                    <li><Link to="/about" className="text-white">About Us</Link></li>
                    <li><Link to="/tournaments" className="text-white">Tournaments</Link></li>
                    <li><Link to="/register" className="text-white">Registration</Link></li>
                    <li><Link to="/contact" className="text-white">Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
