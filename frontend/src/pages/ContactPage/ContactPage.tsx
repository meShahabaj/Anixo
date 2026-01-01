import React, { useState } from "react";
import axios from "axios";
import { FaLinkedinIn } from "react-icons/fa";
import Header from "../Home/HomeUtils/Header.tsx";
import Footer from "../Home/HomeUtils/Footer.tsx";

const ContactPage: React.FC = () => {
    const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!BACKEND_URL) {
            setStatus("error");
            return;
        }

        try {
            setLoading(true);
            setStatus("idle");

            await axios.post(`${BACKEND_URL}/mailAdmin`, formData);

            setStatus("success");
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            setStatus("error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen text-gray-800">
            <Header />

            {/* Hero */}
            <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
                <div className="max-w-7xl mx-auto px-6 py-28">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Contact Anixo
                    </h1>
                    <p className="text-lg md:text-xl max-w-3xl text-white/90">
                        Let’s discuss how our technology solutions can support your business
                        goals. Our team typically responds within one business day.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16">

                {/* Contact Form */}
                <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm">
                    <h2 className="text-2xl font-semibold mb-6">
                        Request a Consultation
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                placeholder="Your full name"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Business Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                placeholder="name@company.com"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">
                                How can we help?
                            </label>
                            <textarea
                                name="message"
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                placeholder="Briefly describe your project or requirements"
                            />
                        </div>

                        {/* Status messages */}
                        {status === "success" && (
                            <p className="text-green-600 text-sm">
                                Thank you. Your message has been sent successfully.
                            </p>
                        )}
                        {status === "error" && (
                            <p className="text-red-600 text-sm">
                                Something went wrong. Please try again or email us directly.
                            </p>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="
                w-full rounded-xl bg-blue-600 px-6 py-3
                text-white font-semibold
                hover:bg-blue-700 transition
                disabled:opacity-60 disabled:cursor-not-allowed
              "
                        >
                            {loading ? "Sending..." : "Submit Request"}
                        </button>
                    </form>
                </div>

                {/* Contact Info */}
                <div className="flex flex-col justify-center space-y-10">
                    <div>
                        <h3 className="text-xl font-semibold mb-4">
                            Contact Information
                        </h3>
                        <p className="text-gray-600 mb-2">
                            <strong>Email:</strong>{" "}
                            <a
                                href="mailto:anixosolutions@gmail.com"
                                className="text-blue-600"
                            >
                                anixosolutions@gmail.com
                            </a>
                        </p>
                        <p className="text-gray-600 mb-2">
                            <strong>Phone:</strong>{" "}
                            <a href="tel:+919336934551" className="text-blue-600">
                                +91 9336934551
                            </a>
                        </p>
                        <p className="text-gray-600">
                            <strong>Location:</strong> Lucknow, Uttar Pradesh, India
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-4">
                            Connect with Us
                        </h3>
                        <a
                            href="https://www.linkedin.com/company/anixo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 text-gray-600 hover:text-blue-600 transition"
                        >
                            <FaLinkedinIn />
                            LinkedIn
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ContactPage;
