import React from "react";
import {
    GlobeAltIcon,
    LightBulbIcon,
    UsersIcon,
} from "@heroicons/react/24/outline";
import Header from "../Home/HomeUtils/Header.tsx";
import Footer from "../Home/HomeUtils/Footer.tsx";

const AboutPage: React.FC = () => {
    return (
        <div className="bg-gray-50 min-h-screen text-gray-800">
            <Header />

            {/* Hero */}
            <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
                <div className="max-w-7xl mx-auto px-6 py-28">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        About Anixo
                    </h1>
                    <p className="text-lg md:text-xl max-w-3xl text-white/90">
                        Anixo is a technology solutions company helping organizations design,
                        build, and scale digital platforms that drive operational efficiency
                        and long-term growth.
                    </p>
                </div>
            </section>

            {/* Mission */}
            <section className="bg-white">
                <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">
                            Our Mission
                        </h2>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            Our mission is to empower businesses through reliable, scalable,
                            and future-ready technology solutions. We work as long-term
                            partners — not just service providers.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            From enterprise web platforms to AI-driven automation, we help
                            organizations modernize operations, improve customer experience,
                            and achieve measurable business outcomes.
                        </p>
                    </div>

                    {/* Optional visual / stat block */}
                    <div className="bg-gray-50 rounded-2xl p-10 border border-gray-100">
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <span className="w-2 h-2 mt-2 bg-blue-600 rounded-full" />
                                <span className="text-gray-700">
                                    Business-first technology strategy
                                </span>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="w-2 h-2 mt-2 bg-blue-600 rounded-full" />
                                <span className="text-gray-700">
                                    Secure and scalable architecture
                                </span>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="w-2 h-2 mt-2 bg-blue-600 rounded-full" />
                                <span className="text-gray-700">
                                    Long-term partnership mindset
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Approach */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-3xl mb-16">
                        <h2 className="text-3xl font-bold mb-4">
                            Our Approach
                        </h2>
                        <p className="text-gray-600 text-lg">
                            We combine strategy, engineering, and innovation to deliver
                            solutions that align with business goals — not just technical
                            requirements.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                            <GlobeAltIcon className="w-10 h-10 text-blue-600 mb-4" />
                            <h3 className="text-xl font-semibold mb-3">
                                Global Perspective
                            </h3>
                            <p className="text-gray-600">
                                We design systems with global scalability, compliance, and
                                performance in mind.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                            <LightBulbIcon className="w-10 h-10 text-indigo-600 mb-4" />
                            <h3 className="text-xl font-semibold mb-3">
                                Innovation with Purpose
                            </h3>
                            <p className="text-gray-600">
                                We apply innovation where it delivers measurable value —
                                efficiency, insight, and growth.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                            <UsersIcon className="w-10 h-10 text-emerald-600 mb-4" />
                            <h3 className="text-xl font-semibold mb-3">
                                People & Partnerships
                            </h3>
                            <p className="text-gray-600">
                                Our success is built on strong relationships, transparency, and
                                collaboration.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AboutPage;
