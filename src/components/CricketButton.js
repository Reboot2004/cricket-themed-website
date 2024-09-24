// components/CricketButton.js
const CricketButton = ({ label, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="bg-green-700 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded shadow-lg transition-all duration-300"
        >
            {label} 🏏
        </button>
    );
};

export default CricketButton;
