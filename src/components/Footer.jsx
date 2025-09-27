import logo from '../assets/logo.png'

const Footer = () => {
    return (
        <>
            <footer className="bg-[#0d0d0d] text-white py-6 mt-2 border-t-1 border-gray-600">
                <div className="container mx-auto text-center text-yellow-500">
                    <h1 className="text-[#FDEC09] font-semibold text-2xl md:text-3xl flex items-center justify-center gap-1"><img className='w-[34px] lg:w-[38px]' src={logo} alt="" /> SAM STUDIO</h1>
                    <p className="text-base md:text-lg mt-2">&copy; 2025 SAM STUDIO All Rights Reserved.</p>
                    <p className="text-base md:text-lg">Made with ❤️ for movie lovers.</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;