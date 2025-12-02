import React from "react";
import { motion, Variants } from "framer-motion";

const technologies = [
    { name: "React", logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
    { name: "Node.js", logo: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
    { name: "TailwindCSS", logo: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg" },
    { name: "TypeScript", logo: "https://cdn.worldvectorlogo.com/logos/typescript.svg" },
    { name: "Python", logo: "https://cdn.worldvectorlogo.com/logos/python-5.svg" },
    { name: "AI/ML", logo: "https://cdn.worldvectorlogo.com/logos/tensorflow-2.svg" },
];

// Fixed variants type
const sliderVariants: Variants = {
    animate: {
        x: ["0%", "-50%"], // slide from 0% to -50%
        transition: {
            x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
            },
        },
    },
};

const TechnologiesSlider: React.FC = () => {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-extrabold text-gray-800 mb-12 text-center">
                    Technologies We Work With
                </h2>

                <div className="overflow-hidden relative">
                    <motion.div
                        className="flex space-x-12"
                        variants={sliderVariants}
                        animate="animate"
                    >
                        {[...technologies, ...technologies].map((tech, idx) => (
                            <div
                                key={idx}
                                className="flex flex-col items-center justify-center min-w-[150px] bg-white p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform"
                            >
                                <img
                                    src={tech.logo}
                                    alt={tech.name}
                                    className="w-16 h-16 object-contain mb-4"
                                />
                                <span className="text-gray-700 font-medium">{tech.name}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default TechnologiesSlider;
