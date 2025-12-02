import React, { useState } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import Header from "../Home/HomeUtils/Header.tsx";
import Footer from "../Home/HomeUtils/Footer.tsx";

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would integrate with an API or email service
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Header />
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-24">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Get in Touch</h1>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto">
                        Have a question or want to discuss your project? Reach out to us and we’ll get back to you promptly.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="bg-white p-8 rounded-xl shadow-lg">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Your Name"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-medium mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="you@example.com"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-medium mb-1">Subject</label>
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Subject"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-medium mb-1">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Your Message"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium px-6 py-3 rounded-lg hover:shadow-lg transition-all w-full"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Contact Info */}
                <div className="flex flex-col justify-center space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h2>
                        <p className="text-gray-600 mb-2">
                            <strong>Email:</strong> <a href="mailto:info@consultco.com" className="text-blue-500">shahabaj773@gmail.com</a>
                        </p>
                        <p className="text-gray-600 mb-2">
                            <strong>Phone:</strong> <a href="tel:+919336934551" className="text-blue-500">+91 9336934551</a>
                        </p>
                        <p className="text-gray-600 mb-2">
                            <strong>Address:</strong> Lucknow, Uttar Pradesh
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Follow Us</h2>
                        <div className="flex space-x-4">
                            <a href="https://www.linkedin.com/in/shahabaj-khan/" className="text-gray-600 hover:text-blue-500 transition-colors"><FaLinkedinIn /></a>
                        </div>
                    </div>

                </div>
            </section>
            <Footer />
        </div>
    );
};

export default ContactPage;
