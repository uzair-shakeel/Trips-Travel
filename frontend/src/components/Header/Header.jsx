import React, { useState, useRef, useEffect, useContext } from 'react';
import Logo from './../../assets/images/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { toast } from 'react-toastify';

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const headerRef = useRef(null);
  const navigate = useNavigate();
  const {user, dispatch} = useContext(AuthContext);

  
  const handleLogout = () => {
    dispatch({type: "LOGOUT"})
    navigate('/home')
    toast.info('Logged Out')
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
          <Link to='/home'>Home</Link>
          <Link to='/tours'>Tours</Link>
          <Link to='/about'>Gallery</Link>
          <Link to='/contact'>Contact</Link>
        </ul>
        <div>
          {user ? (
            <div className='flex gap-3 items-center'>
            <h6 className='text-[18px] font-semibold text-BaseColor rounded hover:text-BHoverColor'>{user.username}</h6>
            <button onClick={handleLogout} className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800">
              Logout
            </button>
            </div>
          ) : (
            <>
              <Link to="/login">
                <button className="px-4 py-2 text-BaseColor rounded hover:text-BHoverColor">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="btn">
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
