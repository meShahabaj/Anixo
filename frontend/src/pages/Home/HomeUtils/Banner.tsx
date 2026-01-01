import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Server,
    Cloud,
    Database,
    Smartphone,
    Monitor,
    ShieldCheck,
    Brain,
    Bot,
    LineChart,
} from "lucide-react";

const slides = [
    {
        title: "Enterprise-Grade Software Solutions",
        subtitle:
            "We design and build scalable digital systems that streamline operations and drive measurable growth.",
        bg: "from-blue-700 to-indigo-800",
        icons: [Server, Cloud, Database],
    },
    {
        title: "Custom Web & Mobile Applications",
        subtitle:
            "Secure, high-performance platforms engineered for long-term business success.",
        bg: "from-slate-700 to-slate-900",
        icons: [Smartphone, Monitor, ShieldCheck],
    },
    {
        title: "AI & Automation for Modern Businesses",
        subtitle:
            "Reduce costs, improve efficiency, and gain insights with intelligent automation.",
        bg: "from-emerald-700 to-teal-800",
        icons: [Brain, Bot, LineChart],
    },
];

const SliderBanner: React.FC = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(
            () => setCurrent((c) => (c + 1) % slides.length),
            7000
        );
        return () => clearInterval(timer);
    }, []);

    const CurrentIcons = slides[current].icons;

    return (
        <section
            className="
        relative w-full overflow-hidden text-white
        h-[60vh] min-h-[420px]
        md:h-[70vh] md:min-h-[520px]
        lg:h-[80vh]
      "
        >
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={`absolute inset-0 bg-gradient-to-r ${slides[current].bg}`}
                >
                    <div className="max-w-7xl mx-auto h-full px-6 flex items-center">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">

                            {/* LEFT: Text */}
                            <div className="max-w-3xl space-y-5 sm:space-y-6">
                                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                                    {slides[current].title}
                                </h1>

                                <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl">
                                    {slides[current].subtitle}
                                </p>

                                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                                    <a
                                        href="/contact"
                                        className="inline-flex justify-center items-center rounded-xl bg-white px-6 py-3 text-blue-700 font-semibold hover:bg-gray-100 transition"
                                    >
                                        Get Started
                                    </a>


                                </div>
                            </div>

                            {/* RIGHT: Visual / Icons */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                className="
                  hidden lg:flex
                  justify-center items-center
                "
                            >
                                <div className="bg-white/10 backdrop-blur rounded-3xl p-10 flex gap-8 shadow-xl">
                                    {CurrentIcons.map((Icon, i) => (
                                        <div
                                            key={i}
                                            className="
                        w-16 h-16 rounded-2xl
                        bg-white/20
                        flex items-center justify-center
                      "
                                        >
                                            <Icon className="w-8 h-8 text-white" />
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Indicators */}
            <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        className={`h-2 w-6 sm:w-8 rounded-full transition-all ${i === current ? "bg-white" : "bg-white/40"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
};

export default SliderBanner;
