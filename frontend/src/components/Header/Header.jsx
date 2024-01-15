import React, { useState, useRef, useEffect } from 'react';
import Logo from './../../assets/images/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const headerRef = useRef(null);

  const handleLogout = () => {
    setIsAuthenticated(!isAuthenticated);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const header = headerRef.current;

      if (scrollY > 20) {
        header.classList.add('bg-white', 'shadow-md', 'fixed', 'top-0', 'z-20', 'left-0', 'right-0');
      } else {
        header.classList.remove('bg-white', 'shadow-md', 'fixed', 'top-0', 'z-20', 'left-0', 'right-0');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header ref={headerRef} className=" transition-all duration-300">
      <nav className="container mx-auto flex justify-between items-center py-4">
        <div className="h-16">
          <img src={Logo} alt="" className="h-full" />
        </div>
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
            <Link to="/about" className="hover:text-gray-300">
              About
            </Link>
          </li>
          <li>
            <a href="/contact" className="hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>
        <div>
          {isAuthenticated ? (
            <button onClick={handleLogout} className="px-4 py-2 bg-orange-400 text-white rounded hover:bg-orange-300">
              Logout
            </button>
          ) : (
            <>
              <Link to="/login">
                <button className="px-4 py-2 text-orange-500 rounded hover:text-orange-300">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="px-4 py-2 bg-orange-400 text-white rounded hover:bg-orange-300">
                  Register
                </button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
