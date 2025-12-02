import React from "react";
import { GlobeAltIcon, LightBulbIcon, UsersIcon } from "@heroicons/react/24/solid";
import Footer from "../Home/HomeUtils/Footer.tsx";
import Header from "../Home/HomeUtils/Header.tsx";

const teamMembers = [
    { name: "Alice Johnson", role: "CEO & Founder" },
    { name: "Bob Smith", role: "Lead Developer" },
    { name: "Clara Lee", role: "AI Specialist" },
];

const AboutPage: React.FC = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            <Header />
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-24">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                        About Plantora
                    </h1>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto">
                        We create modern websites, apps, and AI solutions that help businesses thrive in the digital world.
                    </p>
                </div>
            </section>

            {/* Company Mission / Story */}
            <section className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
                        Our Mission
                    </h2>
                    <p className="text-gray-600 mb-4">
                        At Plantora, our mission is to empower businesses to succeed in the digital era. We combine cutting-edge technologies with creative solutions to deliver products that engage users and drive growth.
                    </p>
                    <p className="text-gray-600">
                        From intuitive websites to AI-powered applications, we help our clients stay ahead of the competition and achieve measurable results.
                    </p>
                </div>
                <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center text-gray-500">
                    Illustration / Image
                </div>
            </section>

            {/* Values / Approach */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-gray-800">
                        Our Approach
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mt-2">
                        We combine strategy, technology, and creativity to deliver solutions that truly make a difference.
                    </p>
                </div>

                <div className="container mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
                    <div className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-lg transition">
                        <GlobeAltIcon className="w-12 h-12 mx-auto text-blue-500 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Global Perspective</h3>
                        <p className="text-gray-600">
                            We think beyond borders and provide solutions that scale globally.
                        </p>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-lg transition">
                        <LightBulbIcon className="w-12 h-12 mx-auto text-yellow-500 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Innovative Solutions</h3>
                        <p className="text-gray-600">
                            Creativity and innovation are at the core of everything we build.
                        </p>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-lg transition">
                        <UsersIcon className="w-12 h-12 mx-auto text-green-500 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">People First</h3>
                        <p className="text-gray-600">
                            Our team and clients are at the heart of every project we undertake.
                        </p>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default AboutPage;
