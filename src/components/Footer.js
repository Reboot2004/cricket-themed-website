// components/Footer.js
const Footer = () => {
    return (
        <footer
            className="bg-green-900 text-white text-center p-4"
            style={{ backgroundImage: 'url(/path/to/cricket-background.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <p className="text-sm">© 2024 XYZ Cricket Organization. All rights reserved.</p>
            <div className="mt-2">
                <span className="mr-3">Follow us:</span>
                {/* Social media cricket-related icons */}
                <a href="https://twitter.com" className="hover:text-yellow-300 text-lg">🐦</a>
                <a href="https://facebook.com" className="ml-3 hover:text-yellow-300 text-lg">📘</a>
            </div>
        </footer>
    );
};

export default Footer;
