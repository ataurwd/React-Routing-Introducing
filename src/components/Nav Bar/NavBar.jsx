import React from 'react';
import { Outlet, useLocation, useNavigation } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import Footer from '../Footer/Footer';

const NavBar = () => {
    const navigation = useNavigation();
    const location = useLocation()
    console.log(location);
    return (
    <div >
        <header className="bg-gray-800 text-white p-4 flex items-center justify-between px-20">
        <div className="flex items-center">
            <Link to="/" className="text-lg font-bold">Your Logo</Link>
        </div>
        <nav className="flex space-x-6">
            {/* <NavLink to="/home" className="hover:text-gray-400">Home</NavLink> */}
            <NavLink to="/about" className="hover:text-gray-400">About</NavLink>
            <NavLink to="/services" className="hover:text-gray-400">Services</NavLink>
            <NavLink to="/contact" className="hover:text-gray-400">Contact</NavLink>
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/post">Post</NavLink>
            <NavLink to="/about">About 2</NavLink>
        </nav>
        <div>
            <img src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg" alt="Profile" className="rounded-full w-10 h-10" />
        </div>
        </header>
        {
            navigation.state === "loading" ? <p>Loading...</p> : <Outlet/>
        }
        </div>
        
    );
};

export default NavBar;