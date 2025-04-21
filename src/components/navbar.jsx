import React from 'react'

const Navbar = () => {
    return (
        <div>
            {/* Navigation Bar Container */}
            <nav className="bg-white border-b border-gray-200">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    
                    {/* Brand / Logo Link */}
                    <a href="/" className="text-2xl font-semibold text-gray-900">
                        Designergalleryhub
                    </a>

                    {/* Mobile Menu Toggle Button (Hamburger icon) */}
                    <button
                        data-collapse-toggle="navbar-default"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        aria-controls="navbar-default"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        {/* Hamburger icon */}
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>

                    {/* Navigation Menu Items (visible on medium+ screens) */}
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="flex flex-col md:flex-row md:space-x-4 p-4 md:p-0 mt-4 md:mt-0 bg-white border border-gray-100 md:border-0 rounded-lg md:bg-transparent">
                            {/* Login Button */}
                            <li>
                                <a
                                    href="/login"
                                    className="block px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition"
                                >
                                    Get Started
                                </a>
                            </li>

                            {/* Profile Page Link */}
                            <li>
                                <a
                                    href="/profile-page"
                                    className="block px-4 py-2 text-sm font-medium text-blue-700 border border-blue-700 rounded-lg hover:bg-blue-50 transition"
                                >
                                    Profile
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
