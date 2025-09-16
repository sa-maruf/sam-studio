import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { TiThMenu } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";

const Navbar = ({ onSearch, onFilter }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [mobileMenu, setMobileMenu] = useState(false);
    const [searchIcon, setSearchIcon] = useState(false);

    const handleSearch = () => {
        onSearch(searchTerm);
    };

    const mobileMenuClick = () => {
        setMobileMenu(!mobileMenu)
    }

    const searchIconClick = () => {
        setSearchIcon(!searchIcon)
    }

    return (
        <nav className="bg-black text-white p-4">
            <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
                {/* mobile menu icon */}
                <div className='md:hidden'>
                    <button onClick={mobileMenuClick} className='text-xl flex'>
                        <div className={`${mobileMenu ? 'hidden' : 'block'}`} ><TiThMenu /></div>
                        <div className={`${mobileMenu ? 'block' : 'hidden'}`}><RxCross2 /></div>
                    </button>
                </div>
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

                {/* Des Search */}
                <div className="hidden md:flex items-center border-1 border-red-500 rounded-md">
                    <input type="text" placeholder="Search movies..." className="p-2  text-white border-1 border-red-500 outline-none rounded-bl-md rounded-tl-md"
                        value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button onClick={handleSearch} className="bg-red-500 p-3 h-full border-1 border-red-500 hover:bg-red-600 transition-colors duration-300 cursor-pointer rounded-tr-md rounded-br-md">
                        <FaSearch />
                    </button>
                </div>
                {/* search icon  */}
                <div className='md:hidden'>
                    <button onClick={searchIconClick} className='flex'>
                        <div className={`${searchIcon && "block"}`}><FaSearch /></div>
                    </button>
                </div>
            </div>
            {/* mobile menu  */}
            <div className={`${mobileMenu ? 'block space-y-1' : 'hidden'}`}>
                <div>
                    <Link to="/" onClick={() => onFilter('all')} className="hover:text-gray-400 transition-colors duration-300">
                        Home
                    </Link>
                </div>
                <div>
                    <Link to="/" onClick={() => onFilter('movie')} className="hover:text-gray-400 transition-colors duration-300">
                        Movies
                    </Link>
                </div>
                <div>
                    <Link to="/" onClick={() => onFilter('tv_series')} className="hover:text-gray-400 transition-colors duration-300">
                        Tv Series
                    </Link>
                </div>
                <div>
                    <Link to="/about" className="hover:text-gray-400 transition-colors duration-300">
                        About Us
                    </Link>
                </div>
            </div>
            {/* mobile search  */}
            <div className={`${searchIcon ? 'block' : 'hidden'}`}>
                <div className="mt-4 flex md:hidden w-11/12 mx-auto items-center border-1 border-red-500 rounded-md">
                    <input type="text" placeholder="Search movies..." className="p-2 w-full  text-white border-1 border-red-500 outline-none rounded-bl-md rounded-tl-md"
                        value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button onClick={handleSearch} className="bg-red-500 p-3 h-full border-1 border-red-500 hover:bg-red-600 transition-colors duration-300 cursor-pointer rounded-tr-md rounded-br-md">
                        <FaSearch />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;