import React from 'react';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

const NavBar = () => {
    return (
    <div >
        <header className="bg-gray-800 text-white p-4 flex items-center justify-between px-20">
        {/* Left Side Logo */}
        <div className="flex items-center">
            <span className="text-lg font-bold">Your Logo</span>
        </div>

        {/* Middle Menu */}
        <nav className="flex space-x-6">
            <Link to="/home" className="hover:text-gray-400">Home</Link>
            <Link to="/about" className="hover:text-gray-400">About</Link>
            <Link to="/services" className="hover:text-gray-400">Services</Link>
            <Link to="/contact" className="hover:text-gray-400">Contact</Link>
            <Link to="/users">Users</Link>
            <Link to="/post">Post</Link>
        </nav>

        {/* Right Side Profile Icon */}
        <div>
            <img src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg" alt="Profile" className="rounded-full w-10 h-10" />
        </div>
        </header>
        <Outlet/>
        {/* <Footer/> */}
        </div>
        
    );
};

export default NavBar;