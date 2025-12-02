import React, { useState } from "react";

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    const services = [
        { name: "Web Development", href: "" },
        { name: "App Development", href: "" },
        { name: "AI Solution", href: "" },
    ];

    return (
        <header className="bg-white shadow-lg sticky top-0 z-50">
            <div className="container mx-auto px-8 flex justify-between items-center h-20">
                {/* Logo */}
                <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">
                    <a href="/">Plantora</a>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-16 items-center relative text-lg">
                    {/* Services Dropdown */}
                    <div
                        className="relative group"
                        onMouseEnter={() => setServicesOpen(true)}
                        onMouseLeave={() => setServicesOpen(false)}
                    >
                        <button className="font-semibold flex items-center gap-2 relative after:block after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all group-hover:after:w-full">
                            Services
                            <span
                                className={`inline-block transform transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""
                                    } text-lg`}
                            >
                                ▼
                            </span>
                        </button>

                        {/* Dropdown */}
                        <div
                            className={`absolute top-full left-0 mt-4 w-64 bg-white border rounded-2xl shadow-xl py-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300`}
                        >
                            {services.map((service) => (
                                <a
                                    key={service.name}
                                    // href={service.href}
                                    className="block px-6 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors rounded-lg font-medium text-lg"
                                >
                                    {service.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Other Links */}
                    <a
                        href="about"
                        className="font-medium relative after:block after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full"
                    >
                        About
                    </a>

                    {/* Contact Button */}
                    <a
                        href="contact"
                        className="ml-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl hover:shadow-2xl transition-all font-semibold text-lg"
                    >
                        Contact Us
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-700 focus:outline-none"
                    >
                        {isOpen ? (
                            <svg
                                className="w-7 h-7"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="w-7 h-7"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden bg-white shadow-lg overflow-hidden transition-all duration-300 ${isOpen ? "max-h-screen py-6" : "max-h-0"
                    }`}
            >
                <nav className="flex flex-col px-6 space-y-4 text-lg">
                    {/* Mobile Services */}
                    <div>
                        <button
                            onClick={() => setServicesOpen(!servicesOpen)}
                            className="flex justify-between w-full font-medium text-gray-700 py-3"
                        >
                            Services
                            <span
                                className={`inline-block transform transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""
                                    }`}
                            >
                                ▼
                            </span>
                        </button>
                        {servicesOpen && (
                            <div className="flex flex-col mt-2 ml-4 space-y-2">
                                {services.map((service) => (
                                    <a
                                        key={service.name}
                                        href={service.href}
                                        className="py-3 text-gray-700 hover:bg-blue-50 rounded-lg transition-colors font-medium"
                                    >
                                        {service.name}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>

                    <a href="/#/about" className="hover:text-blue-600 transition-colors py-2">
                        About
                    </a>
                    {/* <a href="/#/about" className="hover:text-blue-600 transition-colors py-2">
                        Resources
                    </a> */}
                    <a
                        href="/#/contact"
                        className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-3 rounded-xl hover:shadow-2xl transition-all text-center font-semibold"
                    >
                        Contact Us
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
