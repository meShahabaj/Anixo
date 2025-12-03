import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    const services = [
        { name: "Web Development" },
        { name: "App Development" },
        { name: "AI Solution" },
    ];

    return (
        <header className="bg-white shadow-lg sticky top-0 z-50">
            <div className="container mx-auto px-8 flex justify-between items-center h-20">

                {/* Logo */}
                <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">
                    <Link to="/">Anixo</Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-16 items-center relative text-lg">

                    {/* Services Dropdown */}
                    <div
                        className="relative group"
                        onMouseEnter={() => setServicesOpen(true)}
                        onMouseLeave={() => setServicesOpen(false)}
                    >
                        <button className="font-semibold flex items-center gap-2">
                            Services
                        </button>

                        <div className="absolute top-full left-0 mt-4 w-64 bg-white border rounded-2xl shadow-xl py-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                            {services.map((service) => (
                                <p
                                    className="block px-6 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
                                >
                                    {service.name}
                                </p>
                            ))}
                        </div>
                    </div>

                    {/* Other Links */}
                    <Link
                        to="/about"
                        className="font-medium relative hover:text-blue-600"
                    >
                        About
                    </Link>

                    {/* Contact Button */}
                    <Link
                        to="/contact"
                        className="ml-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2 rounded-xl hover:shadow-2xl transition-all font-semibold text-lg"
                    >
                        Contact Us
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-700"
                    >
                        ☰
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden bg-white shadow-lg overflow-hidden transition-all duration-300 ${isOpen ? "max-h-screen py-6" : "max-h-0"}`}>
                <nav className="flex flex-col px-6 space-y-4 text-lg">

                    <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className="flex justify-between w-full font-medium text-gray-700 py-3"
                    >
                        Services ▼
                    </button>

                    {servicesOpen && (
                        <div className="flex flex-col mt-2 ml-4 space-y-2">
                            {services.map((service) => (
                                <p
                                    className="py-3 text-gray-700 hover:bg-blue-50 rounded-lg"
                                >
                                    {service.name}
                                </p>
                            ))}
                        </div>
                    )}

                    <Link to="/about" className="hover:text-blue-600 py-2">
                        About
                    </Link>

                    <Link
                        to="/contact"
                        className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-3 rounded-xl hover:shadow-2xl text-center font-semibold"
                    >
                        Contact Us
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
