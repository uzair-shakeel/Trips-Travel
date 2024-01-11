// Login.jsx

import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginImg from './../assets/images/login.png';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulating login functionality (e.g., API call, validation)
    setTimeout(() => {
      setIsLoading(false);

      // Display success notification
      toast.success('Successfully logged in!', {
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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-4 md:p-8 rounded-lg shadow-md w-full max-w-xl md:max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12">

        {/* Login Photo */}
        <div className="hidden md:block">
          <img src={LoginImg} alt="Trips Travels Logo" className="mx-auto h-full object-cover" />
        </div>

        {/* Login Form */}
        <div className="flex flex-col justify-center">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Login</h2>
            <p className="text-sm md:text-base text-gray-500">Enter your credentials to access your account.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
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
              <button
                type="submit"
                className="w-full py-2 md:py-3 mb-2 md:mb-4 rounded-md text-white font-semibold bg-orange-400 hover:bg-orange-300"
                disabled={isLoading}
              >
                {isLoading ? 'Logging in...' : 'Login'}
              </button>
              <p className="text-sm md:text-base text-center">Don't have an Account? <Link className='text-orange-600 hover:text-orange-800' to='/register'>Register here</Link></p>
            </div>
          </form>
        </div>

        {/* Show Login Photo on Mobile */}
        <div className="md:hidden">
          <img src={LoginImg} alt="Trips Travels Logo" className="mx-auto h-24 md:h-32 mb-4" />
        </div>

      </div>
    </div>
  );
};

export default Login;
