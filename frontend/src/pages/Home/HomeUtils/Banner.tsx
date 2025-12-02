import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
    {
        title: "We Build Stunning Websites",
        subtitle: "Responsive, modern, and optimized to convert visitors into customers.",
        bg: "from-blue-600 to-indigo-700",
    },
    {
        title: "Custom Mobile & Web Apps",
        subtitle: "Delivering high-performance applications tailored to your business needs.",
        bg: "from-purple-600 to-pink-600",
    },
    {
        title: "AI-Powered Solutions",
        subtitle: "Harness the power of artificial intelligence to transform your business.",
        bg: "from-green-600 to-teal-600",
    },
];

const SliderBanner: React.FC = () => {
    const [current, setCurrent] = useState(0);

    // Auto-slide every 6 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    const handlePrev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    const handleNext = () => setCurrent((prev) => (prev + 1) % slides.length);

    return (
        <section className="relative w-full h-[80vh] overflow-hidden text-white">
            <AnimatePresence mode="wait">
                {slides.map((slide, index) =>
                    index === current ? (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.8 }}
                            className={`absolute inset-0 flex items-center justify-center bg-gradient-to-r ${slide.bg} px-6 md:px-20`}
                        >
                            <div className="max-w-2xl text-center md:text-left space-y-6">
                                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                                    {slide.title}
                                </h1>
                                <p className="text-lg md:text-xl text-gray-100">{slide.subtitle}</p>
                                <div className="flex flex-col md:flex-row gap-4 md:gap-6 mt-4 justify-center md:justify-start">
                                    <a
                                        href="#contact"
                                        className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-2xl transition-all"
                                    >
                                        Get Started
                                    </a>
                                    <a
                                        href="#services"
                                        className="border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition-all"
                                    >
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ) : null
                )}
            </AnimatePresence>

            {/* Slider Controls */}
            <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/60 text-white rounded-full p-3 transition-all"
            >
                &#10094;
            </button>
            <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/60 text-white rounded-full p-3 transition-all"
            >
                &#10095;
            </button>

            {/* Dots */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
                {slides.map((_, idx) => (
                    <span
                        key={idx}
                        onClick={() => setCurrent(idx)}
                        className={`w-3 h-3 rounded-full cursor-pointer transition-all ${idx === current ? "bg-white" : "bg-white/50"
                            }`}
                    ></span>
                ))}
            </div>
        </section>
    );
};

export default SliderBanner;
