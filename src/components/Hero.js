// components/Hero.js
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div
            className="h-screen bg-cover bg-center flex items-center justify-center text-center text-white"
            style={{ backgroundImage: 'url(/path/to/cricket-field.jpg)' }}  // Placeholder for cricket background
        >
            <div className="bg-black bg-opacity-50 p-10 rounded-lg">
                <h1 className="text-5xl font-bold mb-4">Join the Ultimate Cricket Experience</h1>
                <p className="text-xl mb-6">Participate in exciting tournaments and showcase your skills.</p>
                <Link to="/register" className="bg-yellow-500 text-white px-6 py-3 rounded-full text-lg hover:bg-yellow-400">
                    Register Now 🏆
                </Link>
            </div>
        </div>
    );
};

export default Hero;
