"use client";
import React, { useState } from "react";
import axios from "axios";
import { FaLinkedinIn } from "react-icons/fa";

const Contact: React.FC = () => {

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

        try {
            setLoading(true);
            setStatus("idle");
            await axios.post("/api/mailroute", formData);
            setStatus("success");
            setFormData({ name: "", email: "", message: "" });
        } catch {
            setStatus("error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-gradient-to-br from-black to-blue-900 min-h-screen text-gray-800">
            {/* Hero */}
            <section className="text-white flex justify-center text-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                        Contact Anixo
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-white/90">
                        Let’s discuss how tech can support your business goals.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 grid gap-14 md:grid-cols-2">
                {/* Contact Form */}
                <div className="bg-white p-6 sm:p-10 rounded-2xl border border-gray-100 shadow-sm">
                    <h2 className="text-xl sm:text-2xl font-semibold mb-6">
                        Request a Consultation
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium mb-1">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                placeholder="Your name"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Email or Phone No*
                            </label>
                            <input
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                placeholder="Your mail address or Mobile number"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">
                                How can we help?
                            </label>
                            <textarea
                                name="message"
                                rows={3}
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                placeholder="Briefly describe your project or requirements"
                            />
                        </div>

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
                            className="w-full rounded-xl bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition disabled:opacity-60"
                        >
                            {loading ? "Sending..." : "Submit Request"}
                        </button>
                    </form>
                </div>

                {/* Contact Info */}
                <div className="flex flex-col justify-center space-y-8 sm:space-y-10 text-white">
                    <div>
                        <h3 className="text-lg sm:text-xl font-semibold mb-4">
                            Contact Information
                        </h3>
                        <p className="mb-2">
                            <strong>Email:</strong>{" "}
                            <a href="mailto:anixosolutions@gmail.com">
                                anixosolutions@gmail.com
                            </a>
                        </p>
                        <p className="mb-2">
                            <strong>Phone:</strong>{" "}
                            <a href="tel:+919336934551">+91 9336934551</a>
                        </p>
                        <p>
                            <strong>Location:</strong> Lucknow, Uttar Pradesh, India
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg sm:text-xl font-semibold mb-4">
                            Connect with Us
                        </h3>
                        <a
                            href="https://www.linkedin.com/company/anixo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 hover:text-blue-400 transition"
                        >
                            <FaLinkedinIn />
                            LinkedIn
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
