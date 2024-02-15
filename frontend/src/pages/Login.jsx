import React, { useState, useContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginImg from "./../assets/images/login2.png";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import BASE_URL from "../utils/config";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const { dispatch, role } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const logInHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();

      if (response.ok) {
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: {
            user: result.data,
            token: result.token,
            role: result.role,
          },
        });
        toast.success(result.message);

        {
          result.role === "admin" ? navigate("/all-booking") : navigate("/");
        }
      } else {
        toast.error(result.message);
      }
    } catch (err) {
      toast.error("Server not responding");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-gray-100">
      <div className="bg-white p-4 md:p-8 rounded-lg shadow-md w-full max-w-xl md:max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12">
        {/* Login Photo */}
        <div className="hidden md:block">
          <img
            src={LoginImg}
            alt="Trips Travels Logo"
            className="mx-auto h-full object-cover"
          />
        </div>

        {/* Login Form */}
        <div className="flex flex-col justify-center">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              Login
            </h2>
            <p className="text-sm md:text-base text-gray-500">
              Enter your credentials to access your account.
            </p>
          </div>

          <form onSubmit={logInHandler} className="space-y-4 md:space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-md md:text-lg font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-BaseColor"
                value={formData.email}
                onChange={handleInput}
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-md md:text-lg font-medium text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-BaseColor"
                value={formData.password}
                onChange={handleInput}
                required
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full btn my-3"
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Login"}
              </button>
              <p className="text-sm md:text-base text-center">
                Don't have an Account?{" "}
                <Link
                  className="text-BaseColor hover:text-BHoverColor"
                  to="/register"
                >
                  Register here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
