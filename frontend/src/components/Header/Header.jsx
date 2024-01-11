
import React, { useState } from 'react';
import Logo from './../../assets/images/logo.png'
import {Link} from 'react-router-dom'
const Header = () => {
  // Example state to represent user authentication status
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to handle logout action
  const handleLogout = () => {
    // Implement logout functionality (e.g., clear user session, update state)
    setIsAuthenticated(!isAuthenticated);
  };

  return (
    <header className=" text-gray-800">
      <nav className="container mx-auto flex justify-between items-center">
        
        <div className="h-[80px]  ">
          <img src={Logo} alt=""  className='h-full'/>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="/tours" className="hover:text-gray-300">
              Tours
            </a>
          </li>
          <li>
            <Link to='/about' className="hover:text-gray-300">
              About
            </Link>
          </li>
          <li>
            <a href="/contact" className="hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>

        {/* Conditional Login/Logout Button */}
        <div>
          {isAuthenticated ? (
            <button onClick={handleLogout} className="px-4 py-2 bg-orange-400 text-white rounded hover:bg-orange-300 ">
            Logout
            </button>) : (
            <>
            <Link to='/login'>
            <button onClick={handleLogout} className="px-4 py-2  text-orange-500 rounded hover:text-orange-300">
              Login
            </button></Link>
            <Link to='/register'>
            <button className="px-4 py-2 bg-orange-400 text-white rounded hover:bg-orange-300 ">
              Register
            </button></Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
