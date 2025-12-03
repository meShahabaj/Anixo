import React, { useState } from "react";
import axios from "axios";

const ContactForm: React.FC = () => {
    const BACKEND_URL = process.env.REACT_APP_BACKEND_URL

    console.log(BACKEND_URL)

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const res = await axios.post(`${BACKEND_URL}/mailAdmin`, formData)
        alert("massege sent");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-3xl">
                <h2 className="text-4xl font-extrabold text-gray-800 mb-4 text-center">
                    Get in Touch
                </h2>
                <p className="text-gray-600 mb-12 text-center">
                    Have a project in mind? Fill out the form below and we'll get back to you as soon as possible.
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="bg-gray-50 p-10 rounded-2xl shadow-lg space-y-6"
                >
                    <div className="grid md:grid-cols-2 gap-6">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            required
                            className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            required
                            className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        />
                    </div>



                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        rows={6}
                        required
                        className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                    />

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-4 rounded-xl text-lg font-semibold hover:shadow-xl transition-all"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;
