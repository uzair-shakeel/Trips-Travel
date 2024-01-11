// Register.jsx

import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RegisterImg from './../assets/images/register.png';
import { Link } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulating registration functionality (e.g., API call, validation)
    setTimeout(() => {
      setIsLoading(false);

      // Display success notification
      toast.success('Successfully registered!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }, 2000);
  };
  
  return (
    <div className="min-h-screen md:min-h-[400px] flex items-center justify-center bg-gray-100">
      <div className="bg-white mx-6 p-6 md:p-8 rounded-lg shadow-md w-full max-w-xl m-8 md:max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12">
        
        {/* Sign Up Photo */}
        <div className="hidden md:block">
          <img src={RegisterImg} alt="Trips Travels Logo" className="mx-auto h-full object-cover" />
        </div>

        
        {/* Sign Up Form */}
        <div className="flex flex-col justify-center">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Register</h2>
            <p className="text-sm md:text-base text-gray-500">Create your account to start your journey.</p>
          </div>

        <form onSubmit={handleSubmit} className="space-y-2 md:space-y-3">
          <div>
            <label htmlFor="username" className="block text-md md:text-lg font-medium text-gray-600">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-orange-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-md md:text-lg font-medium text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-orange-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-md md:text-lg font-medium text-gray-600">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-orange-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-md md:text-lg font-medium text-gray-600">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-orange-500"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-2 md:py-3 mb-2 md:mb-4 rounded-md text-white font-semibold bg-orange-400 hover:bg-orange-300"
              disabled={isLoading}
            >
              {isLoading ? 'Registering...' : 'Register'}
            </button>
            <p className="text-sm md:text-base text-center">Already have an Account? <Link className='text-orange-600 hover:text-orange-800' to='/login'>Login here</Link></p>
          </div>
        </form>
        </div>

      </div>
    </div>
  );
};

export default Register;
