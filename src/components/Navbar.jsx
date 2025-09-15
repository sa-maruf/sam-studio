import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = ({ onSearch, onFilter }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        onSearch(searchTerm);
    };

    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <div onClick={() => onFilter('all')} className="text-2xl font-bold">
                    <Link to="/">SAM STUDIO</Link>
                </div>
                {/*Des Menu */}
                <div className="hidden md:flex space-x-6">
                    <Link to="/" onClick={() => onFilter('all')} className="hover:text-gray-400 transition-colors duration-300">
                        Home
                    </Link>
                    <Link to="/" onClick={() => onFilter('movie')} className="hover:text-gray-400 transition-colors duration-300">
                        Movies
                    </Link>
                    <Link to="/" onClick={() => onFilter('tv_series')} className="hover:text-gray-400 transition-colors duration-300">
                        Tv Series
                    </Link>
                    <Link to="/about" className="hover:text-gray-400 transition-colors duration-300">
                        About Us
                    </Link>
                </div>

                {/* Search */}
                <div className="flex items-center border-1 border-red-500 rounded-md">
                    <input
                        type="text"
                        placeholder="Search movies..."
                        className="p-2  text-black border-1 border-red-500 outline-none"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button onClick={handleSearch} className="bg-red-500 p-3 h-full border-1 border-red-500 hover:bg-red-600 transition-colors duration-300 cursor-pointer">
                        <FaSearch />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;