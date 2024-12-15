import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-100 via-purple-100 to-white px-4 sm:px-6 lg:px-8">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
                <h1 className="text-3xl font-bold text-purple-600 text-center sm:text-4xl">
                    Create an Account
                </h1>
                <p className="mt-2 text-gray-600 text-center text-sm sm:text-base">
                    Sign up to get started.
                </p>

                {/* Form */}
                <form className="mt-8 space-y-6">
                    {/* Name Field */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Full Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                            placeholder="Enter your full name"
                        />
                    </div>

                    {/* Email Field */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                            placeholder="Enter your email"
                        />
                    </div>

                    {/* Password Field */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                            placeholder="Create a password"
                        />
                    </div>

                    {/* Confirm Password Field */}
                    <div>
                        <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                            Confirm Password
                        </label>
                        <input
                            id="confirm-password"
                            name="confirm-password"
                            type="password"
                            required
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                            placeholder="Confirm your password"
                        />
                    </div>

                    {/* Terms and Conditions */}
                    <div className="flex items-center">
                        <input
                            id="terms"
                            name="terms"
                            type="checkbox"
                            required
                            className="h-4 w-4 text-purple-600 focus:ring-purple-50 border-gray-300 rounded" />
                        <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                            I agree to the{' '}
                            <a href="#" className="text-purple-600 font-medium hover:text-purple-500">
                                Terms and Conditions
                            </a>
                        </label>
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-purple-600 hover:bg-purple-700 text-white
                             font-bold py-2 px-4 rounded-md shadow-sm transition focus:outline-none focus:ring-2 focus:ring-purple-500">
                            Sign Up
                        </button>
                    </div>
                </form>

                <p className="mt-6 text-center text-gray-600 text-sm sm:text-base">
                    Already have an account?{' '}
                    <NavLink to="/login"><button className="text-purple-600 font-medium hover:text-purple-500">
                        Log in
                    </button></NavLink>
                </p>
            </div>
        </div>
    );
};

export default Signup;
