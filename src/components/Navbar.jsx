import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { TiThMenu } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import logo from '../assets/logo.png'

const Navbar = ({ onSearch, onFilter }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [mobileMenu, setMobileMenu] = useState(false);
    const [searchIcon, setSearchIcon] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeItem, setActiveItem] = useState('')

    useState(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    const handleSearch = () => {
        onSearch(searchTerm);
        setSearchTerm('')
    };

    const mobileMenuClick = () => {
        setMobileMenu(!mobileMenu)
    }

    const searchIconClick = () => {
        setSearchIcon(!searchIcon)
    }

    return (
        <nav className={`bg-[#0d0d0d] text-[#FDEC09] border-b-1 border-gray-600 p-4 fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/2 backdrop-blur-lg shadow-md" : null}`}>
            <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
                {/* mobile menu icon */}
                <div className='md:hidden'>
                    <button onClick={mobileMenuClick} className='text-[28px] flex'>
                        <div className={`${mobileMenu ? 'hidden' : 'block'}`} ><TiThMenu /></div>
                        <div className={`${mobileMenu ? 'block' : 'hidden'}`}><RxCross2 /></div>
                    </button>
                </div>
                {/* Logo */}
                <div onClick={() => onFilter('all')} className="text-2xl lg:text-3xl font-bold">
                    <Link to="/" className='flex items-center gap-1'><img className='w-[34px] lg:w-[38px]' src={logo} alt="" /> SAMSTUDIO</Link>
                </div>
                {/*Des Menu */}
                <div className="hidden md:flex md:space-x-4 lg:space-x-6 text-lg md:text-sm lg:text-lg">
                    <Link to="/" onClick={() => { onFilter('all'); setActiveItem('Home'); }} className={`transition-colors duration-300 ${activeItem === 'Home' ? 'text-[#FDEC09]' : null}`}>
                        Home
                    </Link>
                    <Link to="/" onClick={() => { onFilter('movie'); setActiveItem("Movie") }} className={`transition-colors duration-300 ${activeItem === 'Movie' ? 'text-white' : null}`}>
                        Movies
                    </Link>
                    <Link to="/" onClick={() => { onFilter('tv_series'); setActiveItem("Tv Series") }} className={`transition-colors duration-300 ${activeItem === 'Tv Series' ? 'text-white' : null}`}>
                        Tv Series
                    </Link>
                    <Link to="/about">
                        About Us
                    </Link>
                </div>

                {/* Des Search */}
                <div className="hidden md:flex items-center border-1 border-[#FDEC09] text-white rounded-md">
                    <input type="text" placeholder="Search movies..." className="lg:p-2 md:p-1 text-white border-1 border-[#FDEC09] outline-none rounded-bl-sm rounded-tl-sm"
                        value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button onClick={handleSearch} className="bg-[#FDEC09] lg:p-3 md:p-2 h-full border-1 border-[#FDEC09] transition-colors duration-300 cursor-pointer rounded-tr-sm rounded-br-sm text-yellow-900">
                        <FaSearch />
                    </button>
                </div>
                {/* mobile search icon  */}
                <div className='md:hidden'>
                    <button onClick={searchIconClick} className='flex text-2xl'>
                        <div className={`${searchIcon ? 'hidden' : 'block'}`} ><FaSearch /></div>
                        <div className={`${searchIcon ? 'block' : 'hidden'}`}><RxCross2 /></div>
                    </button>
                </div>
            </div>
            {/* mobile search  */}
            <div className={`${searchIcon ? 'block' : 'hidden'}`}>
                <div className="mt-4 flex md:hidden w-full mx-auto items-center border-1 text-white border-[#FDEC09] rounded-md">
                    <input type="text" placeholder="Search movies..." className="p-2 w-full  text-white border-1 border-[#FDEC09] outline-none rounded-bl-sm rounded-tl-sm"
                        value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button onClick={() => { handleSearch(); setSearchIcon(false) }} className="bg-[#FDEC09] p-3 h-full border-1 border-[#FDEC09] cursor-pointer rounded-tr-sm rounded-br-sm text-yellow-900">
                        <FaSearch />
                    </button>
                </div>
            </div>
            {/* mobile menu  */}
            <div className={`${mobileMenu ? 'block' : 'hidden'} md:hidden mt-4 space-y-2 text-base font-medium`}>
                <div className="hov">
                    <Link to="/" onClick={() => { onFilter('all'); setMobileMenu(false) }}>
                        Home
                    </Link>
                </div>
                <div className="hov">
                    <Link to="/" onClick={() => { onFilter('movie'); setMobileMenu(false) }}>
                        Movies
                    </Link>
                </div>
                <div className="hov">
                    <Link to="/" onClick={() => { onFilter('tv_series'); setMobileMenu(false) }}>
                        Tv Series
                    </Link>
                </div>
                <div className="hov">
                    <Link to="/about">
                        About Us
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;